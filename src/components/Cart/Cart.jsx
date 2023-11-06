import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, priceTotal, cartEmpty } = useContext(CartContext);

    const cartVacate = () => {
        cartEmpty();
    }

  return (
    <div className="container">
        <h1 className="main-title">Bolsa</h1>

        {
            cart.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.title}</h3>
                    <p>Precio unit: ${prod.price}</p>
                    <p>Precio total: ${prod.price * prod.cant}</p>
                    <p>Cant: {prod.cant}</p>
                    <br />
                </div>
            ))
        }

        {  
            cart.length > 0 ?
            <>
                <h2>Precio total: ${priceTotal()}</h2>
                <button onClick={cartVacate}>Vaciar</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>Tu bolsa está vacía</h2>
        }
        
    </div>
  )
}

export default Cart