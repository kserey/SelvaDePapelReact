import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../../Context/CartContext'

import './CartWidget.css'
import bolsaImg from '../../assets/img/bolsa.png'


const CartWidget = () => {
  const {cartCant} = useContext(CartContext)

  return (
    <div>
      <Link className='menu-link' to='../Cart/Cart'>
        <img src={bolsaImg} alt="bolsa de compras" className="bolsa-img" />
        <span className="cartNumber">{cartCant()}</span>
      </Link>
    </div>
  )
}

export default CartWidget