import './PortadaPage.css'

const PortadaPage = () => {
  return (
    <section id="portada" className="d-flex align-items-center">
      <div className="container" data-aos="fade-up">
        <div className="col-lg-6 pt-5 pt-lg-0  order-lg-1 d-flex flex-column justify-content-center">
        <h1 data-aos="fade-up">Bienvenido a Selva de Papel</h1>
        <h2 data-aos="fade-up" data-aos-delay="400">Tu tienda de papelería creativa</h2>
        <div data-aos="fade-up" data-aos-delay="800">
            <a href="#about" className="btn-get-started scrollto">Conócenos</a>
        </div>
        </div>
      </div>
    </section>
  )
}

export default PortadaPage