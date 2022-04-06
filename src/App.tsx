import React from "react";
import "./App.css";
import Rewier from "./components/rewiers/Rewier";
import Title from "./components/title/Title";


function App() {
  return (
    <main>
          <Title />
      <section className='container'>
        <Rewier />
      </section>
    </main>
  );
}

export default App;
