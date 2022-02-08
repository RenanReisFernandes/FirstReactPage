import disney from '../../img/disney.jpg'
import dubai from '../../img/dubai.jpg'
import louvre from '../../img/louvre.jpg'
import './Carousel.module.css';




function Carousel() {
    return (

      
         <nav>
            <div className="container-fluid">
            
          
            <div id="mainSlider" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#mainSlider" data-slide-to="0" className="active"></li>
                <li data-target="#mainSlider" data-slide-to="1" ></li>
                <li data-target="#mainSlider" data-slide-to="2" ></li>
              </ol>

              <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={disney} className="d-block w-100" alt="Disney"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h4>Disney</h4>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img src={dubai} className="d-block w-100" alt="Dubai"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h4>Dubai</h4>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img src={louvre} className="d-block w-100" alt="Museu do Louvre"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h4>Torre Eiffel</h4>
                    </div>
                  </div>
              </div>
                  <a href="#mainSlider" className="carousel-control-prev" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                  </a>
                  <a href="#mainSlider" className="carousel-control-next" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Próxima</span>
                  </a>
            </div>
           
           </div>
         </nav>
     
        
    )
}

export default Carousel