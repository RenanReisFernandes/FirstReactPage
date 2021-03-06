import styles from './Cadastro.module.css'
import LinkButtom from '../Layout/LinkButtom'


function Cad(){
    return(
  
      <form>
            <div className="form-group">
      <label for="inputName">Nome</label>
      <input type="text" className="form-control" id="inputName" placeholder="Nome"/>
    </div>
    <div className="form-group">
      <label for="inputAddress">Endereço</label>
      <input type="text" className="form-control" id="inputAddress" placeholder="Rua 0, nº 0"/>
    </div>
    <div className="form-group">
      <label for="inputAddress2">Complemento</label>
      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, hotel, casa, etc."/>
    </div>
    <div className="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">Cidade</label>
        <input type="text" className="form-control" id="inputCity"/>
      </div>
      <div className="form-group col-md-4">
        <label for="inputEstado">Estado</label>
        <select id="inputEstado" class="form-control">
          <option selected>Escolher...</option>
          <option>...</option>
        </select>
      </div>
      <div className="form-group col-md-2">
        <label for="inputCEP">CEP</label>
        <input type="text" className="form-control" id="inputCEP"/>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
      </div>
      <div className="form-group col-md-6">
        <label for="inputPassword4">Senha</label>
        <input type="password" className="form-control" id="inputPassword4" placeholder="Senha"/>
      </div>
    </div>

    <div className="form-group">

    </div>
    <buttom className={styles.btn}><LinkButtom to="#" text="Enviar"/></buttom>

    
  </form>
  
    )
  }
  
  export default Cad