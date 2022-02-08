import ilha from '../../img/ilha.jpg'
import aventura from '../../img/aventura.jpg'
import panorama from '../../img/panorama.jpg'

function Card(){
    return(
        <section className="mainCard">


        <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={ilha} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Tenha experiências incríveis</h5>
      
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src={aventura} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Nós cuidamos de tudo para voçê</h5>
      
    </div>
  </div>

  <div className="card">
    <img className="card-img-top" src={panorama} alt="Imagem de capa do card"/>
    <div className="card-body">
      <h5 className="card-title">Você merece viajar!</h5>
           
    </div>
  </div>
</div>


</section>
    )
}

export default Card

