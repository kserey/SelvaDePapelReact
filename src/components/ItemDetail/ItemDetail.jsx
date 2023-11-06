import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../Context/CartContext";


const ItemDetail = ( {item} ) => {

    const { cart, cartAdd } = useContext(CartContext);
    console.log(cart);

    const [cant, setCant] = useState(1);

    const handleLower = () => {
        cant > 1 && setCant(cant - 1)
    }

    const handleRise = () => {
        cant < item.stock && setCant(cant + 1)
    }

  return (
    <div className="container">
        <div className="product-detail">
            <img src={item.img} alt={item.title} />
            <div>
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
                <p className="price">${item.price}</p>
                <ItemCount
                  cantidad={cant}
                  handleRise={handleRise}
                  handleLower={handleLower}
                  handleAdd={() => { cartAdd(item, cant) }}
                />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail