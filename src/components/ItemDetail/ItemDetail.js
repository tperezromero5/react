import { useState } from "react"
import ItemCount from "../itemCount/itemCount"
import "./itemDetail.css"
import { Link } from "react-router-dom"
const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState (0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }

    return(
        <article className="articuloDetalle">
            <header className="headerDetalle">
                <h2>
                    {name}
                </h2>
            </header>
            <picture className="pictureDetalle">
                <img className="imagenRemeraDetalle" src={img} alt={name}/>
            </picture>
            <section className="parrafosDetalle">
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripcion:  {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer className="contadorDetalle">
                {
                    quantityAdded >0 ? (
                        <Link to='/cart'>terminar compra</Link>
                    ) :(
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                    
                }
            </footer>
        </article>
    )
}
export default ItemDetail