import './AboutPage.css'

const AboutPage = () => {
  return (

    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2><i className="bi bi-person-circle"></i></h2>
          <h3>¿Quiénes somos <span>Nosotros?</span></h3>
          <p>Somos un emprendimiento familiar dedicado a crear artículos de encuadernación y papelería, creativos y de primera calidad.
            <br />
            Todos nuestros productos son hechos a mano con amor.
          </p>
        </div>
        
        <div className="row content">
          <div className="col-lg-6">
            <p>
              Dentro de nuestras colecciones podrás encontrar artículos de papelería de distintos estilos, siempre estamos innovando para ustedes con productos novedosos, práctivos y bonitos.
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>
                  <strong>Colección <span>Office</span>:</strong> diseñada para ajetreo del día a día, donde hay que organizar tareas laborales y personales para optimizar los tiempos y no perder de vista los objetivos.</li>
              </ul>
            </p>

          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <ul>
              <li><i className="ri-check-double-line"></i>
                <strong>Colección <span>Adventure</span>:</strong> cuadernos y kits temáticos populares.</li>
              <li><i className="ri-check-double-line"></i>
                <strong>Colección <span>Encuadernación Artesanal</span>:</strong> cuadernos y libretas 100% artesanales, cosidas a mano con mucha paciencia y proligidad.
              </li>
              <li><i className="ri-check-double-line"></i>
                <strong>Colección <span>Personalizados</span>:</strong> podemos personalizar productos de otras colecciones a tu gusto, únicos e irrepetibles, como tú.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
    
  )
}

export default AboutPage