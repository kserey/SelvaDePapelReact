import '../Footer/Footer.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Footer = () => {
  return (
    
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 footer-links">
              <h4>Contacto</h4>
              <ul>
                <li>
                  <ul>
                  <AccessTimeIcon className='footer-icons'/>
                  <strong>Horarios de Atención:</strong>
                    <li className='footer-subline'>Lunes a Viernes: 09:00 a 18:00 hrs.</li>
                    <li className='footer-subline'>Sábados: 09:00 a 14:00 hrs.</li>
                  </ul>
                </li>

                <li>
                  <WhatsAppIcon className='footer-icons'/>
                  <strong>Teléfono:</strong> <a href="tel:+56981205702">+56 9 8120 5702</a>
                </li>

                <li>
                  <MailOutlineIcon className='footer-icons'/>
                  <strong>Mail:</strong> <a href="mailto:contacto.selvadepapel@gmail.com">contacto.selvadepapel@gmail.com</a>
                </li>

                <li>
                  <LocationOnOutlinedIcon className='footer-icons'/>
                  <a href="https://goo.gl/maps/Mpj8r3wRUkhsuVaK8" target="_blank" rel="noreferrer">
                    Santiago, Región Metropolitana, <b>Chile</b>
                  </a>
                </li>

              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Sitios de Interés</h4>
              <ul>
                <li><ChevronRightOutlinedIcon className='footer-icons'/> <a href="#">Home</a></li>
                <li><ChevronRightOutlinedIcon className='footer-icons'/> <a href="#about">Nosotros</a></li>
                <li><ChevronRightOutlinedIcon className='footer-icons'/> <a href="#portfolio">Colecciones</a></li>
                <li><ChevronRightOutlinedIcon className='footer-icons'/> <a href="#faq">Preguntas Frecuentes</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Todos los derechos reservados. Hecho con <FavoriteIcon className='footer-firm-icons'/> por
            <a href="https://www.linkedin.com/in/irina-serey-b7901159/"> ISerey | <LinkedInIcon className='footer-firm-icons'/></a>
          </div>
        </div>
      </div>

    </footer>

  );
}


export default Footer