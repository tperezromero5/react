import ItemCount from "../itemCount/itemCount"
import "./itemDetail.css"
const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    return(
        <article className="articuloDetalle">
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture className="pictureDetalle">
                <img className="imagenRemeraDetalle" src={img} alt={name}/>
            </picture>
            <section>
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
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={quantity => console.log('cantidad agregada ',)}/>
            </footer>
        </article>
    )
}
export default ItemDetail