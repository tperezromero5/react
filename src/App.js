import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";
function App(){
    return <div className="container">
        <div className="navbar-brand">
        <NavBar/>
        </div>
        <div className="center">
        <ItemListContainer greeting={"bienvenido"}/>
        </div>
    </div>}
    export default App;