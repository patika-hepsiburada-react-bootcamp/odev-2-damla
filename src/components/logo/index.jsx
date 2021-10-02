import React from 'react'
import logo from '../../assets/logo.svg'
import styles from './styles.module.scss'

export default function Logo() {
    return (
        <img src={logo} className={styles.logo} alt="hangman-logo" />
    )
}


