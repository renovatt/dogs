import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN_POST, TOKEN_GET, TOKEN_VALIDATE_POST } from './api'

export const UserContext = React.createContext()

export const UserStorage = ({children}) => {

  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()

  const userLogout = React.useCallback(
    async function (){
    setData(null)
    setError(null)
    setLogin(false)
    setLoading(false)
    localStorage.removeItem('token')
    navigate('/login')
  }, [navigate])

  async function getUser(token){
    const {url, options} = TOKEN_GET(token)
    const res = await fetch(url, options)
    const json = await res.json()
    setData(json)
    setLogin(true)
  }

  async function userLogin(username, password){
    try{
      setError(null)
      setLoading(true)
      const {url, options} = TOKEN_POST({username, password})
      const resToken = await fetch(url, options)
      if(!resToken.ok) throw new Error(`Error: Usuário inválido!`)
      const {token} = await resToken.json()
      localStorage.setItem('token', token)
      await getUser(token)
      navigate('/conta')
    } catch(err){
      setError(err.message)
      setLogin(false)
    } finally{
      setLoading(false)
    }
  } 

  React.useEffect(() => {
    async function autoLogin(){
      const token = localStorage.getItem('token')
      if(token){
        try{
          setError(null)
          setLoading(true)
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const res = await fetch(url, options )
          if(!res.ok) throw new Error('Token inválido')
          await getUser(token)
        } catch(err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      }
    }
    autoLogin()
  }, [userLogout])

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login }}>
        {children}
    </UserContext.Provider>
  )
}