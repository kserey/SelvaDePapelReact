import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const cartInit = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(cartInit);

    const cartAdd = (item, cant) => {
        const itemAdded = { ...item, cant };

        const cartNew = [...cart];
        const cartOn = cartNew.find((product) => product.id === itemAdded.id);

        if (cartOn) {
            cartOn.cant += cant;
        } else {
            cartNew.push(itemAdded);
        }
        setCart(cartNew);
    }

    const cartCant = () => {
        return cart.reduce((acc, prod) => acc + prod.cant, 0);
    }

    const priceTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cant, 0);
    }

    const cartEmpty = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
    

    return (
        <CartContext.Provider value={ {
            cart,
            cartAdd,
            cartCant,
            priceTotal,
            cartEmpty
        } }>
            {children}
        </CartContext.Provider>
    )



}