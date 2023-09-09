import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import World from "./component/World";
import Age from "./component/Age";

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello />
      <Hello />
      <World />
      <Welcome />
      <Age age={10}/>
      <Age age={20}/>
      <Age age={30}/>
    </div>
  );
}

export default App;
