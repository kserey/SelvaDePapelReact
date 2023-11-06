import './FaqPage.css'

const FaqPage = () => {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-title">
          <h2><i className="bi bi-patch-question"></i></h2>
          <h3>Preguntas <span>Frecuentes</span></h3>
        </div>

        <ul className="faq-list">
          <li>
            <div
              data-bs-toggle="collapse"
              className="collapsed question"
              href="#faq1"
            >
              ¿Cómo Comprar?
              <i className="bi bi-chevron-down icon-show"></i>
              <i className="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
              <p>
                Puedes hacer tu pedido directamente en el carrito de nuestra página web, o puedes hacer tu pedido por DM en 
                <a href="https://www.instagram.com/selvadepapel_/" target="_blank" rel="noreferrer">
                  <strong> Instagram</strong>
                </a>
                .
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">
              Entregas y Envíos
              <i className="bi bi-chevron-down icon-show"></i>
              <i className="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
              <p>
                <ul>
                  <li>
                    <strong>Envíos en la RM:</strong> por aplicaciones de delivery (entrega durante el día para productos en stock), o mediante servicios de mensajería por pagar.
                  </li>
                  <li>
                    <strong>Envíos a otras Regiones:</strong> mediante empresas de mensajería por pagar.
                  </li>
                  <li>
                    <strong>Entregas Presenciales:</strong> en la RM entregamos a diario en{' '}
                    <strong>Metro Santa Lucía</strong> en horario a convenir, y algunas veces al año realizamos entregas también en el{' '}
                    <strong>centro de La Serena</strong>, avisaremos las fechas por{' '}
                    <a href="https://www.instagram.com/selvadepapel_/" target="_blank" rel="noreferrer">
                      <strong>Instagram</strong>
                    </a>
                    , no olvides seguirnos!
                  </li>
                </ul>
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">
              Términos y Condiciones
              <i className="bi bi-chevron-down icon-show"></i>
              <i className="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
              <p>
                <ul>
                  <li>
                    Los productos personalizados requieren anticipo del 50% del valor total cotizado. Haznos todas tus preguntas antes de comprar, una vez confirmado el pedido y transferido el abono no se admiten cambios. En caso de desistir de la compra el abono no se devuelve.
                  </li>
                  <li>
                    Los envíos por courrier se realizan los días miércoles y viernes, o día hábil posterior.
                  </li>
                  <li>
                    Para las entregas presenciales se solicita puntualidad, el tiempo de espera máximo será de 15 minutos, luego de eso nos retiraremos y la entrega deberá reprogramarse. Valoramos tu tiempo y el nuestro, si vienes tarde por favor avísanos y la postergamos si podemos.
                  </li>
                </ul>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FaqPage;
