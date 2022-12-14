import React from 'react'
import { PHOTO_GET } from '../../Api'
import { useFetch } from '../../Hooks/useFetch'
import { Error } from '../Help/Error'
import { Loading } from '../Help/Loading'
import { PhotoContent } from '../Photo/PhotoContent'
import styles from './FeedModal.module.css'

export const FeedModal = ({photo, setModalPhoto}) => {

  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  function handleOutSideClick(e){
    if(e.target === e.currentTarget){
      setModalPhoto(null)
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutSideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}
