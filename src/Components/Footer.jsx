import React from 'react'
import styles from './Footer.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <div className={styles.socialList}>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/renovatt/" target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/renovatt" target="_blank">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <p>&copy; Dogs. Alguns direitos reservados | Criado por <a href="https://www.linkedin.com/in/renovatt/">renovatt</a></p>
    </footer>
  )
}
