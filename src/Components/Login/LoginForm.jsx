import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Forms/Input'
import { Button } from '../Forms/Button'
import { Error } from '../Help/Error'
import { useForm } from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'
import { Head } from '../Help/Head'

export const LoginForm = () => {

  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = React.useContext(UserContext)

  async function handleSubmit(e) {
    e.preventDefault()
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Login" />
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (<Button disabled>Carregando...</Button>) : (<Button>Entrar</Button>)}
        <Error error={error && 'Dados incorretos.'} />
      </form>
      <Link className={styles.lost} to='/login/perdeu'>Perdeu sua senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastro</h2>
        <p>Ainda não possui sua conta? Cadastre-se já!</p>
        <Link className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
      </div>
    </section>
  )
}
