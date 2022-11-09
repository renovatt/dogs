import React from 'react'

export const PhotoGet = () => {

    function handleSubmit(e){
        e.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/api/photo')
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(json => {
            console.log(json)
            return json
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Enviar</button>
    </form>
  )
}
