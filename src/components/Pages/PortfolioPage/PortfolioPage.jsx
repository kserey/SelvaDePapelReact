import './PortfolioPage.css'
import ItemList from '../../ItemList/ItemList'

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      
      <div className="container">
        <div className="section-title">
          <h2><i className="bi bi-collection"></i></h2>
          <h3>Revisa nuestras <span>Colecciones</span></h3>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li data-filter="*" className="filter-active">Todos</li>
              <li data-filter=".filter-app">Office</li>
              <li data-filter=".filter-card">Adventure</li>
              <li data-filter=".filter-web">Encuadernación Artesanal</li>
              <li data-filter=".filter-web">Personalizados</li>
            </ul>
          </div>
        </div>
      </div>
      <ItemList />

    </section>

  );
}

export default Portfolio;
