import fondo1 from "../assets/img/logo.png"
import Header from "../components/Header";
export default function Home() {
  return (
    <>
    <Header />
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={fondo1} className="d-block mx-lg-auto img-fluid" alt="logo" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Bienvenido a <span className="fw-bold">CHASMASK</span></h1>
          <p className="lead">Herramienta que te ayudará a
            encontrar ese maestro o maestra, que
            se encargará de los proyectos,
            mantenimientos y reparaciones del
            hogar.</p>

        </div>
      </div>
    </div>
    </>
  );
}