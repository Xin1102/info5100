import React from "react";
import photo from "../images/photo.jpeg"


const Contact = () => {
    return <>
        <h1 className="title"> Please contact me via:</h1>
        <p>Phone number: (408)981-4803</p>
        <p>Email: xinliao1102@gmail.com</p>
        <img src={photo} alt="xin's photo" className="photo" />
    </>
}

export default Contact;