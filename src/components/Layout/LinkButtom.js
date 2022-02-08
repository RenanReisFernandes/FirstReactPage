import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './LinkButtom.module.css'


function LinkButtom({to, text}){
    return(
        <Link className={styles.btn} to={to}>
        {text}
        </Link>
    )
}

export default LinkButtom

