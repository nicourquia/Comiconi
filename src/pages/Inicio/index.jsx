import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Inicio.css'
import '../../assets/css/animaciones.css'

const batman = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ff1491f-cd7e-46d7-8553-3c0673cf9853/deom7nk-7ccec05d-42e1-494f-89b0-0ea82e68abf9.png/v1/fill/w_1024,h_1317,strp/batman_free_online_png_by_shwz_deom7nk-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMxNyIsInBhdGgiOiJcL2ZcLzRmZjE0OTFmLWNkN2UtNDZkNy04NTUzLTNjMDY3M2NmOTg1M1wvZGVvbTduay03Y2NlYzA1ZC00MmUxLTQ5NGYtODliMC0wZWE4MmU2OGFiZjkucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uSZAynApDYxHkjID3HYhMQ4FXDISmL6PnpVc5Itu-6o"

function Inicio() {
  
  document.title = 'Comiconi Inicio';
  return (
<div>
  <section className="heroportada position-relative pt-48 pb-40 bg-dark bg-cover bg-size--cover slide-in-fwd-center">
    {/* Overlay */}
    <span className="position-absolute top-0 start-0 w-full h-full bg-dark opacity-80" />
    {/* Contenido */}
    <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
      <div className="row row-grid align-items-center">
        <div className="col-lg-8 text-center text-lg-start">
          {/* Título */}
          <h1 className="title-inicio ls-tight font-bolder display-5 text-white mb-5">
            ¡Bienvenido a Comiconi!
          </h1>
          {/* Texto */}
          <p className="title-inicio lead text-white text-opacity-80 mb-10 w-lg-2/3">
            Somos una pequeña tienda de Comics con una gran dedicación.
            {/* Botones */}
          </p><div className="mt-10 mx-n2">
            <Link to="/" className="btn btn-lg btn-primary shadow-sm mx-2 px-lg-8">
              Ver Comics
            </Link>
            <Link to="" className="btn btn-lg btn-primary bg-success py-2 mx-2 px-lg-8">
              Promociones
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <article>
      <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
        <img className="d-block mx-auto img-fluid mb-4" src={batman} alt="habemusdog" />
        <h1 className="display-5 fw-bold">Chequeá la tienda</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Un gran poder conlleva una gran... estanteria llena de comics! Dale pasá y mira lo que tenemos para vos</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Ver Comics</button></Link>
            <Link to=""><button type="button" className="btn btn-outline-secondary btn-lg px-4">Promos</button></Link>
          </div>
        </div>
      </div>
      {/* Call to action o hero para desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={batman} className="d-block mx-lg-auto img-fluid" alt="Pedí Online" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Chequeá la tienda</h1>
            <p className="lead">Un gran poder conlleva una gran... estanteria llena de comics! Dale pasá y mira lo que tenemos para vos</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Ver Comics</button></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>        
  
</div>
  )
}

export default Inicio; 