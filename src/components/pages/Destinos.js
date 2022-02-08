import CardDestinos from '../Layout/CardDestinos'
import styles from './Destinos.module.css'


function Destinos(){
    return(
        <section className={styles.destinos_container}>
            <h1>Destinos</h1>
        <CardDestinos />
        </section>
    )
}
export default Destinos