import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
/*function App(){
    return <h1>hola que tal buen dia</h1> <input style={{color:"red", fontSize:"20px"}}/>*/

root.render(<App/>)