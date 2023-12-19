import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom";
import "./navBar.css"
const NavBar = () => {
return (
    <nav className="navBar">
        <Link className="logo" to='/'>
            <h3>Rehavita</h3>
            <h4>Salud</h4>
        </Link>
        <div className="navLinks">
            <NavLink to={`/category/indumentaria`} className={({ isActive})=> isActive ?'ActiveOption':'Option'}>Indumentaria</NavLink>
            <NavLink to={`/category/accesorios`} className={({ isActive})=> isActive ?'ActiveOption':'Option'}>Accesorios</NavLink>
        </div>
        <CartWidget/>
    </nav>
)
}
export default NavBar;