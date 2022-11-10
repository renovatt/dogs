import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserHeader } from './UserHeader'
import { Feed } from '../Feed/Feed'
import { UserPhotoPost } from './UserPhotoPost'
import { UserStats } from './UserStats'

export const User = () => {
  return (
    <section className='container'>
        <UserHeader/>
        <Routes>
            <Route path='/' element={<Feed/>}/>
            <Route path='/stats' element={<UserStats/>}/>
            <Route path='/postar' element={<UserPhotoPost/>}/>
        </Routes>
    </section>
  )
}
