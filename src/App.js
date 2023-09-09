import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import World from "./component/World";

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello />
      <Hello />
      <World />
      <Welcome />
    </div>
  );
}

export default App;
