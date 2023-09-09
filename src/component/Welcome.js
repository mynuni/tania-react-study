import { useState } from "react";

export default function Welcome() {
    const [inputText, setInputText] = useState();
    function addText(e) {
        const text = e.target.value;
        setInputText(text);
    }

    return (
        <div>
            <input type="text" onChange={addText} />
            <div>받아쓰기:{inputText}</div>
        </div>);
}