import { useState, useContext} from "react";
import ItemCount from "../itemCount/itemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext/cartContext";

const ItemDetail= ({id, name, img, description, price, category, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState (0)
    const {addItem} = useContext (CartContext )
    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
        const item ={
            id,name,price
        }
        addItem(item, quantity)
    }
    return(
        <div className="divContenedor">
            <div className="img">
            <img src={img} alt={name}/>
            </div>
            <div className="contenido">
            <p><strong>precio: </strong>${price}</p>
            <p><strong>categoria: </strong>{category}</p>
            <p className="descripcionProd"><strong>descripcion: </strong>{description}</p>
            {
                quantityAdded > 0 ?(
                    <Link to='/Cart' className= 'terminar' > terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
                    )
            }
            </div>
        </div>
    )
}
export default ItemDetail;