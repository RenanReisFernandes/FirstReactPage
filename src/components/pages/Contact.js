import styles from './Contact.module.css'


function Contact(){
    return(
        <div className={styles.contact_container}>
            <h1>Contato</h1>


            <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label"> Seu Email</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome@examplo.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Deixe uma mensagem</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        </div>
    )
}
export default Contact