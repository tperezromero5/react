import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
return<div className="container has-background-color-green">    
    <nav className="navbar">
    <h3 className="navbar-start">REHAVITA ESPACIO INTEGRAL</h3> 
        <div className="navbar-start">
        <button>INICIO</button>
        <button>NOSOTROS</button>
        <button>TIENDA</button>
        </div>
        <div className="navbar-end">
        <CartWidget />
        </div>
    </nav>
    
    </div>
}
export default NavBar;