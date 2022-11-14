import React from 'react'
import { FeedModal } from './FeedModal'
import { FeedPhotos } from './FeedPhotos'
import PropType from 'prop-types'

export const Feed = ({ user }) => {

  const [modalPhoto, setModalPhoto] = React.useState(null)
  const [pages, setPages] = React.useState([1])
  const [infinite, setInfinite] = React.useState(true)

  React.useEffect(() => {
    let wait = false
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if (scroll > height * .75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = false
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }


    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite])

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      {pages.map(page =>
        <FeedPhotos
          user={user}
          page={page}
          key={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite} />
      )}
    </div>
  )
}

Feed.PropType = {
  user: PropType.oneOfType([
    PropType.string.isRequired,
    PropType.number.isRequired
  ])
}
