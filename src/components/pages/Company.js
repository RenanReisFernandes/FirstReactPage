import About from '../Layout/About'
import styles from './Company.module.css'


function Company(){
    return(
        <>
        <section className={styles.company_container}>
            <h1>Sobre nós</h1>
        </section>

            <About />
        </>
    )
}
export default Company