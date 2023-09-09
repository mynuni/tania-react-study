import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import World from "./component/World";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Hello />
      <World />
      <Welcome />
      <div className={styles.box}>App Box</div>
    </div>
  );
}

export default App;
