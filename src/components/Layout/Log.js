import LinkButtom from '../Layout/LinkButtom'
import styles from './Cadastro.module.css'
import Cadastro from "../pages/Cadastro"


function Log(){
    return(
        <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Endereço de email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email"/>
          <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Senha</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha"/>
        </div>

          <label>
          <buttom className={styles.btn}><LinkButtom to="#" text="Enviar"/></buttom>
          </label>
        
       <div>
       <p>Ainda não é cadastrado?</p>
       </div>
        
        <label>
        <buttom className={styles.btn}><LinkButtom to="/Cadastro" text="Realizar cadastro"/></buttom>
        </label>

      </form>
    )
}

export default Log



