import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'


function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            < input type="number" placeholder="Código do destino"/>
        <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm