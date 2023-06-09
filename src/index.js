import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// function PrintName(){
//     return <h1>Hello React Js</h1>
// }

// const PrintName = () => {
//     return <h1> Hello, I am coming from Arrow function component</h1>;
// };

const root = ReactDOM.createRoot(document.getElementById("girish"));
// the root id in index.html is linked with this by using document object modelling in react

root.render(<App />);
