import React from 'react'
import { COMMENT_POST } from '../../Api'
import { useFetch } from '../../Hooks/useFetch'
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import { Error } from '../Help/Error'

export const PhotoCommentsForm = ({id, setComments}) => {

  const [comment, setComment] = React.useState('')
  const {request, error} = useFetch()

  async function handleSubmit(e){
    e.preventDefault()
    const {url, options} = COMMENT_POST(id, { comment })
    const { res, json } = await request(url, options)
    if(res.ok){
      setComment('')
      setComments((comments) => [...comments, json] )
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <textarea 
        id='comment'
        name='comment'
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}/>
        <button>
          <Enviar />
        </button>
        <Error error={error}/>
    </form>
  )
}
