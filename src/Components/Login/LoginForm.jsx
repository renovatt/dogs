import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Forms/Input'
import { Button } from '../Forms/Button'
import { Error } from '../Help/Error'
import { useForm } from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'

export const LoginForm = () => {

  const username = useForm()
  const password = useForm()

  const {userLogin, error, loading} = React.useContext(UserContext)
  
  async function handleSubmit(e){
    e.preventDefault()
    if(username.validate() && password.validate()){
      userLogin(username.value, password.value)
  }    
}

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form onSubmit={handleSubmit}>
      <Input label="Usuário" type="text" name={username} {...username}/>
      <Input label="Senha" type="password" name={password} {...password}/>
      {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
      <Error error={error}/>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}
