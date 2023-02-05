import Navbar from './Navbar';
import Home from './Home';
import Coin from './Coin';
import Accordion from './Accordion';
import { useEffect } from "react";
import { useState } from "react";

function App() {
  return (

    <div className="App">
     <Navbar />

     <div className="content">
     <Home />
     <Coin />
      <Accordion />
     </div>
    </div>
  );
}

export default App;
