import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg'
import { ReactComponent as Adicionar } from '../../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg'

export const UserHeaderNav = () => {
    const [mobile, setMobile] = React.useState(null)
    const {userLogout} = React.useContext(UserContext)

  return (
    <nav className={styles.nav}>
        <NavLink to='/conta' end><MinhasFotos/>{mobile && 'Minhas Fotos'}</NavLink>
        <NavLink to='/conta/stats'><Estatisticas/>{mobile && 'Estatísticas'}</NavLink>
        <NavLink to='/conta/postar'><Adicionar/>{mobile && 'Adicionar'}</NavLink>
        <button onClick={userLogout}><Sair/>{mobile && 'Sair'}</button>
    </nav>
  )
}
