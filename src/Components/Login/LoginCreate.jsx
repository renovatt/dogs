import React from 'react'
import { USER_POST } from '../../Api'
import { useFetch } from '../../Hooks/useFetch'
import { useForm } from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import { Button } from '../Forms/Button'
import { Input } from '../Forms/Input'
import { Error } from '../Help/Error'

export const LoginCreate = () => {

  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const {userLogin} = React.useContext(UserContext)
  const { loading, error, request } = useFetch()

  async function handleSubmit(e){
    e.preventDefault()
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    
    const {res} = await request(url, options)
    if(res.ok) userLogin(username.value, password.value)
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Email" type="text" name="email" {...email}/>
        <Input label="Senha" type="text" name="password" {...password}/>
        {loading ? ( <Button disabled>Cadastrando...</Button> ) : (
          <Button>Cadastrar</Button>)}
      <Error error={error}/>
      </form>
    </section>
  )
}
