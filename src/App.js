import { Card } from "./components/Card";
import "./App.css";
import { Button } from "./components/Button";

const App = () => {
  return (
    <>
      <section className="App">
        <h1>Poke App With Recoil</h1>
        <Button />
        <main>
          <Card />
        </main>
      </section>
    </>
  );
};

export default App;
