import React from 'react'
import { PhotoGet } from './endpoint/PhotoGet'
import { PhotoPost } from './endpoint/PhotoPost'
import { TokenPost } from './endpoint/TokenPost'
import { UserPost } from './endpoint/UserPost'

export const Api = () => {
  return (
    <div>
        <h1>API Teste</h1>
        <UserPost />
        <h2>Token Post</h2>
        <TokenPost />
        <h2>Photo Post</h2>
        <PhotoPost />
        <h2>Photo Get</h2>
        <PhotoGet />
    </div>
  )
}
