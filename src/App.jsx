import './App.css'

// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Contact from './components/ContactForm/ContactForm'
import { CartProvider } from './Context/CartContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

// Pages
import FaqPage from './components/Pages/FaqPage/FaqPage'
import AboutPage from './components/Pages/AboutPage/AboutPage'
import PortadaPage from './components/Pages/PortadaPage/PortadaPage'
import PortfolioPage from './components/Pages/PortfolioPage/PortfolioPage'

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Header />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/products/:category" element={<ItemListContainer />} />
            <Route path="/components/Pages/AboutPage/AboutPage" element={<AboutPage />}/>
            <Route path="/contactForm" element={<Contact />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>       
          </Routes>

          <PortadaPage />
          <AboutPage />
          <PortfolioPage />
          <FaqPage />

          <Footer />

        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
