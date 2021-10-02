import React from 'react'
import styles from './styles.module.scss'

function Menu({ children }) {
    return (
        <nav className={styles.container}>
            {children}
        </nav>
    )
}

export default Menu;
