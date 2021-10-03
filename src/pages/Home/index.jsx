import styles from "./styles.module.scss"
import Header from "../../components/Header"
import Section from "../../components/Section"
import Footer from "../../components/Footer"

function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Section />
            <Footer />
        </div>
    )
}

export default Home;