import React from 'react'
import '../../assets/css/animaciones.css'

const sheldon = "https://images.ecestaticos.com/0NSU6CTpIsbkQSi6hjq36RSdxTo=/0x0:0x0/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F769%2Ff6d%2Fe65%2F769f6de657b8d14f063b2c640a863474.jpg"

function Acerca() {
    document.title = 'Comiconi Acerca de';
    return (
        <div className="slide-in-fwd-center">
        <div className="container marketing">
          {/* Nuestra ética */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Sheldon Cooper.<span className="text-muted"><p>Dueño de Comiconi</p></span></h2>
              <p className="lead">Hola! Soy Sheldon Cooper, fanatico de los comics desde niño. Siempre tuve admiración por los superheroes. Más allá de sus poderes lo que mas me gusta de ellos es que ponen en riesgo su vida por sus seres queridos y no tan queridos tambien.</p>
            </div>
            <div className="col-md-5">
              <img src={sheldon} className="img-fluid mx-auto" alt="dueñadehabemuspapamaríaeugeniavidal" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Acerca