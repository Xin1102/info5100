import React from "react";

const Projects = () => {
    return <>
        <h1 className="title"> Projects </h1>

        <div className="projectsDiv">
            <div className="project">
                <h1>Project 1</h1>
                <a href="https://codepen.io/Xin2/pen/LYmjOdv" target="_blank">All for JC-T</a>
            </div>
            <div className="project">
                <h1>Project 2</h1>
                <a href="https://codepen.io/Xin2/pen/vYjGrJW?editors=1000" target="_blank"> First HTML </a>
            </div>
            <div className="project">
                <h1>Project 3</h1>
                <a href="https://gentle-nougat-c396bc.netlify.app/" target="_blank">Flappy Bird</a>
            </div>
            <div className="project">
                <h1>Project 4</h1>
                <a href="https://darling-lamington-3eb877.netlify.app/" target="_blank">Guessing Game</a>
            </div>
            <div className="project">
                <h1>Project 5</h1>
                <a href="https://merry-griffin-20de1e.netlify.app/" target="_blank">Fish APIs</a>
            </div>
            <div className="project">
                <h1>Project 6</h1>
                <a href="./home" target="_blank"> My Portfolio</a>
            </div>
        </div>

    </>
}

export default Projects;