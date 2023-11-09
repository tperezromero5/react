import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
return<nav className="navbar">
    <h3>REHAVITA ESPACIO INTEGRAL</h3> 
    <div className="navbar-brand">
        <button>INICIO</button>
        <button>NOSOTROS</button>
        <button>TIENDA</button>
    </div>
    <CartWidget />
</nav>
}
export default NavBar;