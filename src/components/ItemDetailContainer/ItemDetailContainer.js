import { useState, useEffect } from "react";
import { getProductById } from "../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css"
const ItemDetailContainer =() => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(()=> {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error);
            })
    }, [itemId])
    return(
        <div className="itemContainer">
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer