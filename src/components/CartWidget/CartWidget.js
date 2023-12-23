import cart from "./assets/cart.svg"
import { useContext } from "react";
import { CartContext } from "../cartContext/cartContext";
import { Link } from "react-router-dom";
function CartWidget() {
    const  totalQuantity  = useContext(CartContext);
    console.log(totalQuantity.totalQuantity);
    
    return (
    <div>
        <Link className="imagenCarrito" to="/cart" style={{ display: totalQuantity.totalQuantity > 0 }}>
        <img src={cart} alt="logo"/>
        {totalQuantity.totalQuantity> 0 && <span>{totalQuantity.totalQuantity}</span>}
        </Link>
    </div>
    );
}

export default CartWidget;