import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom";
import "./navBar.css"
const NavBar = () => {
return (
    <div className="nav-container">
        <nav className="navBar">
                <Link to='/'>
                    <h3 className="logo">Rehavita Salud</h3>
                </Link>
                <div className="navLinks">
                    <NavLink to={`/category/indumentaria`} className={({ isActive})=> isActive ?'ActiveOption':'Option'}>Indumentaria</NavLink>
                    <NavLink to={`/category/accesorios`} className={({ isActive})=> isActive ?'ActiveOption':'Option'}>Accesorios</NavLink>
                </div>
                <CartWidget className="carrito"/>
        </nav>
    </div>
    
)
}
export default NavBar;