import { Link } from "react-router-dom"
import "./item.css"
const Item =({id, name, img, price, stock}) => {
    return(
        <div className="divItem">
            <article className="articulo">
                <header>
                <h2 className="nombreProducto">{name}</h2>
                </header>
                <picture>
                <img className="imagenRemera" src={img} alt={name} />
                </picture>
                <section>
                    <p>
                    Precio: ${price}
                    </p>
                    <p>
                    Stock:{stock}
                    </p>
                </section>
                <footer className="footerItem">
                <Link className="botonDetalle" to={`/Item/${id}`}>Ver detalle</Link>
                </footer>
            </article>
        </div>
    )
}
export default Item