import styles from './Home.module.css'
import Carousel from '../Layout/Carousel'
import Card from '../Layout/Card'


function Home(){
    return(
        <>
         <Carousel />
        <section className={styles.home_container}>
           
            <h1>Bem-vindo(a) à <span>Sua viagens</span></h1>
            <p>Porque viajar é colecionar memórias!</p> 
        </section>
        <Card />
        </>
        
    )
}
export default Home