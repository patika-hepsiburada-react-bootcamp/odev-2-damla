import React from 'react'
import styles from "./styles.module.scss"

export default function Character({ children }) {
    return (
        <div className={styles.container}>
            {children ? <span className={styles.char}>{children}</span> : " "}
        </div>
    )
}
