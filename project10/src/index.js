import react, { useState, useEffect } from "react";
import {createRoot} from "react-dom/client";
import {AnimalCrossing} from "./components/index.js";
import "./style.css"

const App = () => {
    return <>
        <AnimalCrossing />
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />)