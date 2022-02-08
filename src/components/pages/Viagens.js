import LinkButtom from '../Layout/LinkButtom'
import styles from './Viagens.module.css'



function Viagens(){
    return(
        <section className={styles.viagens_container}>
            <h1>Clique para cadastrar seu destino!</h1>
            <br></br>
            <buttom className={styles.btn}><LinkButtom to="/Cadastradas" text="Cadastrar viagens"/></buttom>
            

        </section>
    )
}
export default Viagens