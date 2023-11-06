import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from '../../Firebase/FirebaseConfig';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const [title, setTitle] = useState('Products');

    const category = useParams().category;

    useEffect(() => {
        
        const productsRef = collection(db,'products');

        const q = category ? query(productsRef, where('category','==', category));

        getDocs(q)
        .then((resp) => {

          setProducts(
            resp.docs.map((doc) => {
              return {...doc.data(), id: doc.id}
            })
          )

        })
        
    }, [category])


  return (
    <div>
        <ItemList products={products} title={title}/>
    </div>
  )
}

export default ItemListContainer