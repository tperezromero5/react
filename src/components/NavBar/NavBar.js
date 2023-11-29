import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
return (
    <nav>
        <Link to='/'>
            <h3>Rehavita</h3>
            <h4>Salud</h4>
        </Link>
        <div>
            <NavLink to={`/category/indumentaria`} className={({ isActive})=> isActive ?'ActiveOption':'Option'}>Indumentaria</NavLink>
            <NavLink to={`/category/accesorios`} className={({ isActive})=> isActive ?'ActiveOption':'Option'}>Accesorios</NavLink>
        </div>
        <CartWidget/>
    </nav>
)
}
export default NavBar;