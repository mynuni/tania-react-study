import styles from "./Hello.module.css";

export default function Hello() {
    return (
        <div>
            <div>HELLO</div>
            <div className={styles.box}>Hello Box</div>
        </div>
    );
}