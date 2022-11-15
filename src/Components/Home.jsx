import React from 'react'
import { Feed } from './Feed/Feed'
import { Head } from './Help/Head'

export const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title="Fotos" description="Home do site dogs"/>
      <Feed/>
    </section>
  )
}
