import "./App.css";
import data from "./assets/data.json";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        {data.map((section, index) => {
          return <Section key={index} section={section}></Section>;
        })}
      </div>
    </div>
  );
}

export default App;
