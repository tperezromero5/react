import { Link } from "react-router-dom"
import "./item.css"
const Item =({id, name, img, price, stock}) => {
    return(
        <article className="articulo">
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img className="imageRemera" src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock:{stock}
                </p>
            </section>
            <footer>
                <Link to={`/Item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}
export default Item