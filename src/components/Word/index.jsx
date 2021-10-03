import styles from "./styles.module.scss"

export default function Word({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
