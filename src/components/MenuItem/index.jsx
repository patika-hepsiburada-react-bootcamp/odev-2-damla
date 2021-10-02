import styles from './styles.module.scss'

function MenuItem({ children }) {
    return (
        <li className={styles.container}>
            {children}
        </li>
    )
}

export default MenuItem;
