import React,{useState} from "react";

function TextReapeaterButton() {
    const [repetitions, setRepetations] = useState(1);

    const textArray = [];
    for(let i = 0; i < repetitions; i++) {
        textArray.push(<span key = {i}>I like this text</span>)
    }

    return(
        <button className="TextRepeaterButton">
            {textArray}
        </button>
    )
}

export default TextReapeaterButton;