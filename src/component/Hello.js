import { useState } from "react";
import styles from "./Hello.module.css";

export default function Hello() {
    const [greetingText, setGreetingText] = useState("HELLO");
    function showGreetingText() {
        const greetingMessage = greetingText === "HELLO" ? "SEE YOU LATER" : "HELLO";
        setGreetingText(greetingMessage);
    }

    return (
        <div>
            <div>HELLO</div>
            <div className={styles.box}>Hello Box</div>
            <button onClick={showGreetingText}>인사하기</button>
            <div>인사말:{greetingText}</div>
        </div>
    );
}