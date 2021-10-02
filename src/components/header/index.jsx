import styles from "./styles.module.scss"
import React from 'react'
import Logo from '../Logo/'
import Menu from '../Menu/'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <div className={styles.container}>
      <Logo />
      <Menu />
    </div>
  )
}

// Header.propTypes = {

// }

export default Header

{/* <header className="App-header">
<img src={logo} className="App-logo" alt="hangman-logo" />
<p>
  idam 10dk sonra baslayacaktir.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Test
</a>  */}