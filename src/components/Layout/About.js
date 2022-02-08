import people from '../../img/people.jpg'


function About(){
    return(
   
                
    <div id="about-area">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                  <h3 className="main-title">Sobre a <span>Nova viagens</span></h3>
                  </div>
                  <div className="col-md-6">
                        <img className="img-fluid" src={people} alt="Agência Nova Viagens"/>
                  </div>
                  <div className="col-md-6">
                      <h3 className="about-title"> Porque viajar é colecionar memórias</h3>
                      <p>Nova viagens nasceu de um desafio proposto pela recode pro e hoje é uma das maiores
                      agências de viagens do mundo, com sede no Rio de Janeiro, Brasil e filiais em São Paulo,
                      Minas gerais, Bahia, Santa Catarina e Goiânia, além de países como: México, Estados Unidos,
                      Canadá, Russia, Argentina, Suíça, entre outros. </p>
                  </div>
              </div>
          </div>

      </div>
   
    )
  }
  export default About