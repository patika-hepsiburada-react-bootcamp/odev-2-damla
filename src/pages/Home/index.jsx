import styles from "./styles.module.scss"
import Header from "../../components/Header"
import Section from "../../components/Section"
import Footer from "../../components/Footer"
import Character from "../../components/Character"
import Word from "../../components/Word"
function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Section>
                <Word>
                    <>
                        <Character>A</Character>
                        <Character />
                        <Character />
                        <Character />
                    </>
                </Word>

            </Section>
            <Footer />
        </div>
    )
}

export default Home;