
import angola from '../../img/angola.jpg'
import alemanha from '../../img/alemanha.jpg'
import australia from '../../img/australia.jpg'
import canada from '../../img/canada.jpg'
import china from '../../img/china.jpg'
import estadosunidos from '../../img/estadosunidos.jpg'
import emirados from '../../img/emirados.jpg'
import inglaterra from '../../img/inglaterra.jpg'
import japao from '../../img/japao.jpg'
import portugal from '../../img/portugal.jpg'
import suiça from '../../img/suiça.jpg'
import london from '../../img/london.jpg'

import styles from './CardDestinos.module.css'

function CardDestinos(){
    return(
   <>
  <section className={styles.CardDestinos}>
  <div class="card-deck">

  <section>
  <div className="card">
    <img className="card-img-top" src={alemanha} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">alemanha</h5>
      <p className="card-text">Conheça a alemanha.</p>
    </div>
    <div className="card-footer">
    <small className="text-muted">Código do destino</small>
      <button>1111</button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={angola} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Angola</h5>
      <p className="card-text">Conheça a Angola.</p>
    </div>
    <div className="card-footer">
    <small className="text-muted">Código do destino</small>
      <button>222</button>
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src={london} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Londres</h5>
      <p className="card-text">Conheça Londres.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Código do destino</small>
      <button>333</button>
    </div>
  </div>

  </section>


<section>

<div className="card">
    <img className="card-img-top" src={australia} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Austrália</h5>
      <p className="card-text">Conheça a Austrália.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Código do destino</small>
      <button>333</button>
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src={canada} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Canadá</h5>
      <p className="card-text">Conheça o Canadá.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Código do destino</small>
      <button>444</button>
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src={china} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">China</h5>
      <p className="card-text">Conheça a China.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Código do destino</small>
      <button>555</button>
    </div>
  </div>

</section>

  

<section>

<div className="card">
    <img className="card-img-top" src={estadosunidos} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Estados Unidos</h5>
      <p className="card-text">Conheça os Estados Unidos.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Código do destino</small>
      <button>666</button>
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src={emirados} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Dubai</h5>
      <p className="card-text">Conheça Dubai.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Código do destino</small>
      <button>777</button>
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src={inglaterra} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Inglaterra</h5>
      <p className="card-text">Conheça a Inglaterra.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Código do destino</small>
      <button>888</button>
    </div>
  </div>
 
</section>



<section>

<div className="card">
    <img className="card-img-top" src={japao} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Japão</h5>
      <p className="card-text">Conheça o Japão.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Código do destino</small>
      <button>999</button>
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src={portugal} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Portugal</h5>
      <p className="card-text">Conheça Portugal.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Código do destino</small>
      <button>1000</button>
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src={suiça} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Suiça</h5>
      <p className="card-text">Conheça a Suiça.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Código do destino</small>
      <button>1001</button>
    </div>
  </div>


</section>


</div>

</section>

</>


    )
}

export default CardDestinos