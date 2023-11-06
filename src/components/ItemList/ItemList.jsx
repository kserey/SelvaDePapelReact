

const ItemList = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">        
        <div className="row portfolio-container">

          <div className="prod col-lg-4 col-md-6 portfolio-item filter-app">
            <img className="prod-img img-fluid" src="assets/img/portfolio/portfolio-1.jpg" alt="" />
            <div className="prod-info portfolio-info">
              <h4 className="prod-titulo">Producto 1</h4>
              <p className="prod-colec">Office</p>
              <a className="portfolio-lightbox preview-link" href="" title="Agregar"><i className="bi bi-bag-heart"></i></a>
              <a className="details-link" href="portfolio-details.html" title="Detalles"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web producto">
            <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Producto 1</h4>
              <p>Adventure</p>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ItemList;
