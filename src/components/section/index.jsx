import styles from './styles.module.scss'

function Section({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Section;
