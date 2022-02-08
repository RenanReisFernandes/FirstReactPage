import CardPromocoes from '../Layout/CardPromocoes'
import styles from './Promocoes.module.css'

function Promocoes(){
    return(
        <section className={styles.promocoes_container}>
            <h1>Promoções</h1>
            <CardPromocoes />
        </section>
    )
}
export default Promocoes