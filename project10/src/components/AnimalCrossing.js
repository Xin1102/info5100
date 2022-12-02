import { enumDeclaration } from "@babel/types";
import react,{useState,useEffect} from "react";
import background from "../background.jpeg"

const AnimalCrossing = () => {
    const[fishNumber, setFishNumber] = useState(1)
    const[name, setName] = useState("")
    const[image,setImage] = useState("")

    const getFish = async() => {
        const response = await fetch(`https://acnhapi.com/v1a/fish/${fishNumber}`);
        const result = await response.json();
        console.log(result)
        setName(result["file-name"]);
        setImage(result.image_uri);
    }
    const formHelper = (event) => {
        console.log(event.target.value);
        setFishNumber(event.target.value);
    }

    useEffect ( () => {
        getFish();
        console.log("use effect has ran")
    },[fishNumber])

    return<>
        <img src={background} id="background"/>
        <h1> Fish in AnimalCrossing</h1>
        <h2>This is a {name}</h2>
        <img src={image}/>
        <div class="twoButton">
            <button onClick={() => setFishNumber(fishNumber + 1)}>+</button>
        <form>
            <input type="number" name="centerInput" onChange={(event) =>formHelper(event)}></input>
        </form>
            <button onClick={() => setFishNumber(fishNumber - 1)}>-</button>
            
        </div>
    </>
}

export default AnimalCrossing;