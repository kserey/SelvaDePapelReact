import './Header.css'

import logoImg from '../../assets/img/SIMBOLO_REDONDO.png';

import NavBar from '../NavBar/NavBar';
import CartWidget from '../CartWidget/CartWidget';

const Header = () =>{
  return (
    <header id="header" className="fixed-top">

      <div className="container d-flex align-items-center justify-content-between">
        <a href="index.html">
          <img src={logoImg} alt="logo Selva de Papel" className="logo-img" />
        </a>
        <NavBar />
        <CartWidget />
      </div>

    </header>
  );
}

export default Header;