import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Forms/Input'
import { Button } from '../Forms/Button'
import { useForm } from '../../Hooks/useForm'
import { TOKEN_POST, TOKEN_GET } from '../../api'

export const LoginForm = () => {

  const username = useForm()
  const password = useForm()

  React.useEffect(()=> {
    const token = localStorage.getItem('token')
    if(token){
      getUser(token)
    }
  }, [])

  async function getUser(token){
    const { url, options } = TOKEN_GET(token)
    const res = await fetch(url, options)
    const json = await res.json()
    console.log(json)
  }
  
  async function handleSubmit(e){
    e.preventDefault()
    if(username.validate() && password.validate()){
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value
      })

    const res = await fetch(url, options)
    const json = await res.json()
    localStorage.setItem('token', json.token)
    const token = localStorage.getItem('token')
    getUser(token)
  }    
}

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      <Input label="Usuário" type="text" name={username} {...username}/>
      <Input label="Senha" type="password" name={password} {...password}/>
      <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </div>
  )
}
