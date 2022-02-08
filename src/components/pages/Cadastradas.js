import { useState } from 'react'
import ProjectForm from '../projects/ProjectForm'
import styles from './Cadastradas.module.css'


function Cadastradas(){

    return(
        <div className={styles.viagensCad_container}>
            <h1>Registro de destinos</h1>
            <p>Digite o código do destino</p>
            <ProjectForm btnText="Cadastrar"/>

        </div>
    )
}
export default Cadastradas