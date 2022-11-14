import React from 'react'
import { PHOTO_DELETE } from '../../Api'
import { useFetch } from '../../Hooks/useFetch'
import styles from './PhotoDelete.module.css'

export const PhotoDelete = ({id}) => {

    const {loading, request} = useFetch()

   async function handleClick(){
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if(confirm){
        const {url, options} = PHOTO_DELETE(id)
        const {res} = await request(url, options)
        if(res.ok) window.location.reload()
    }
}

  return (
    <>
        {loading ?
        ( <button disabled className={styles.delete}>Deletar</button> ) :
        ( <button className={styles.delete} onClick={handleClick}>Detelar</button> )}
    </>
  )
}
