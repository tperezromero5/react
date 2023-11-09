import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";
function App(){
    return <div className="container">
        <NavBar/>
        <ItemListContainer greeting={"bienvenido"}/>
    </div>}
    export default App;