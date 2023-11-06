import { Link } from 'react-router-dom'


const Item = ( {product} ) => {
  return (
    <div className="product">
        <img src={product.img} alt={product.title} />
        <div>
            <h4>{product.title}</h4>
            <p>Precio: ${product.price}</p>
            <Link className="view-more" to={`../item/${product.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item