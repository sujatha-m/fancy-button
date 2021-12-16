import React,{useState} from "react";

function TextReapeaterButton() {
    const [repetitions, setRepetations] = useState(1);

    const textArray = [];
    for(let i = 0; i < repetitions; i++) {
        textArray.push(<span key = {i}>I like this text</span>)
    }
    const handleClick = () => {
        setRepetations(repetitions + 1)
    }

    return(
        <button onClick={handleClick} className="TextRepeaterButton">
            {textArray}
        </button>
    )
}

export default TextReapeaterButton;