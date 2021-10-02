import styles from "./styles.module.scss"
import React from 'react'
import Logo from '../Logo/'
import Menu from '../Menu/'
import MenuItem from '../MenuItem/'

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.leftMenu}>
        <Logo />
        <h1>Hangman&nbsp;Game</h1>
      </div>
      <Menu>
        <MenuItem><h1>Score</h1></MenuItem>
        <MenuItem><h1>Reset</h1></MenuItem>
      </Menu>
    </div>
  )
}

export default Header;