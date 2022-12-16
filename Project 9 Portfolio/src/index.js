import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import "./style.css"
import backgroundphoto from "./images/background.jpg";

import {
    Home,
    Education,
    Projects,
    Contact
} from "./components/index.js"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
    return <>
        <div className="greetingsDiv">
            <h3 className="hi"> Hello, it's me  </h3>
            <h1 className="Xin"> Xin </h1>
            <h1 className="Xin2"> Xin </h1>
            {/* <img src={backgroundphoto} alt="main photo" className="mainPhoto" /> */}
            <h1 className="point">.</h1>
        </div>

        <div className="components">
            <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="education" element={<Education />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>

            <div className="links">
                <Link to="/home"> <p className="linkButton">  Home </p> </Link>
                <Link to="/education"> <p className="linkButton">  Education </p></Link>
                <Link to="/projects"> <p className="linkButton">  Projects</p></Link>
                <Link to="/contact"> <p className="linkButton">  Contact</p></Link>
            </div>
        </div>
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);



