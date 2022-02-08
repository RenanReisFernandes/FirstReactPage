
import styles from './Container.module.css'

function Containere(props){
return(
    <div className={`${styles.containere} ${styles[props.customClass]}`}>{props.children}</div>


)

}

export default Containere