import React from 'react'

export const UserPost = () => {
  
    const [username, setUserName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    function handleSubmit(e){
        e.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/api/user', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        username,
        email,
        password
    })
})

    .then(res => {
        console.log(res)
        return res.json()
    })

    .then(json => {
        console.log(json)
        return json
    })

    console.log(username, email, password)
}
  
    return (
    <form onSubmit={handleSubmit}>
        <input 
         type="text"
         value={username}
         placeholder="username"
         onChange={({target}) => setUserName(target.value)} />

        <input 
         type="email"
         value={email}
         placeholder="email"
         onChange={({target}) => setEmail(target.value)} />

        <input 
         type="password"
         value={password}
         placeholder="password"
         onChange={({target}) => setPassword(target.value)} />

         <button>Enviar</button>
    </form>
  )
}
