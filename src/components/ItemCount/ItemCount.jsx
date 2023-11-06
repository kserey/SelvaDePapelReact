const ItemCount = ( {cant, handleLower, handleRise, handleAdd} ) => {

  return (
    <div>

        <div className="item-count">
            <button onClick={handleLower}>-</button>
            <p>{cant}</p>
            <button onClick={handleRise}>+</button>
        </div>
        <button className="add-to-cart" onClick={handleAdd}>Agregar a la bolsa</button>
    </div>
  )
}

export default ItemCount