import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Firebase/FirebaseConfig';

const Checkout = () => {

    
    const [orderId, setOrderId] = useState('');

    const { cart, priceTotal, cartEmpty } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const buy = (data) => {
        const orders = {
            client: data,
            products: cart,
            total: priceTotal()
        }
        console.log(orders);

        const orderRef = collection(db, "orders");

        addDoc(orderRef, orders)
            .then((doc) => {
                setOrderId(doc.id);
                cartEmpty();
            })

    }

    if (orderId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu pedido, nos pondremos en contacto contigo a la brevedad.</h1>
                <p>Tu número de orden es: {orderId}</p>
            </div>
        )
    }

  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="form" onSubmit={handleSubmit(buy)}>

            <input type="text" placeholder="Ingresa tu nombre" {...register("name")} />
            <input type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresa tu teléfono" {...register("phone")} />

            <button className="send" type="submit">Comprar</button>

        </form>
    </div>
  )
}

export default Checkout