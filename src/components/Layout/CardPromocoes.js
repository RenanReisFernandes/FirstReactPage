import riodejaneiro from '../../img/riodejaneiro.jpg'
import saopaulo from '../../img/saopaulo.jpg'
import minasgerais from '../../img/minasgerais.jpg'


function CardPromocoes(){
    return(

      <section className="mainCard">

        <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={riodejaneiro} alt="Imagem de capa do card"/>
    <div class="card-body">
      <h5 class="card-title">Rio de Janeiro</h5>
      <p class="card-text">Rio de Janeiro está em Promoção.</p>
      <div className="card-footer">
    <small className="text-muted">Código do destino</small>
      <button>212121</button>
    </div>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={saopaulo} alt="Imagem de capa do card"/>
    <div class="card-body">
      <h5 class="card-title">São Paulo</h5>
      <p class="card-text">São Paulo está em Promoção.</p>
      <div className="card-footer">
    <small className="text-muted">Código do destino</small>
      <button>011011</button>
    </div>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={minasgerais} alt="Imagem de capa do card"/>
    <div class="card-body">
      <h5 class="card-title">Minas Gerais</h5>
      <p class="card-text">Minas Gerais está em Promoção.</p>
      <div className="card-footer">
    <small className="text-muted">Código do destino</small>
      <button>232323</button>
    </div>
    </div>
  </div>
</div>
      </section>  
    )
}

export default CardPromocoes