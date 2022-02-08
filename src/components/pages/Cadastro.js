import Cad from '../Layout/Cad'
import styles from './Cadastro.module.css'


function Cadastro(){
    return (
        <section className={styles.cadastro_container}>
            <h1>Cadastro</h1>
            <Cad />
        </section>
    )
}
export default Cadastro