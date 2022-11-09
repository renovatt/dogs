import React from 'react'

export const TokenPost = () => {
  
    const [username, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [token, setToken] = React.useState('')

    function handleSubmit(e){
        e.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        username,
        password
    })
})

    .then(res => {
        console.log(res)
        return res.json()
    })

    .then(json => {
        console.log(json)
        setToken(json.token)
        return json
    })

    console.log(username, password)
}
  
    return (
    <form onSubmit={handleSubmit}>
        <input 
         type="text"
         value={username}
         placeholder="username"
         onChange={({target}) => setUserName(target.value)} />

        <input 
         type="password"
         value={password}
         placeholder="password"
         onChange={({target}) => setPassword(target.value)} />

         <button>Enviar</button>
         <p style={{wordBreak: 'break-all'}}>{token}</p>
    </form>
  )
}
