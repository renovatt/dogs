import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserHeader } from './UserHeader'
import { Feed } from '../Feed/Feed'
import { UserPhotoPost } from './UserPhotoPost'
import { UserStats } from './UserStats'
import { UserContext } from '../../UserContext'
import { NotFound } from '../NotFound'

export const User = () => {

  const { data } = useContext(UserContext)

  return (
    <section className='container'>
        <UserHeader/>
        <Routes>
            <Route path='/' element={<Feed user={data.id} />}/>
            <Route path='/stats' element={<UserStats/>}/>
            <Route path='/postar' element={<UserPhotoPost/>}/>
            <Route path='*' element={<NotFound/> } />
        </Routes>
    </section>
  )
}
