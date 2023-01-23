import Navbar from './Navbar';
import Home from './Home';
import { useEffect } from "react";
import { useState } from "react";

function App() {
  return (

    <div className="App">
     <Navbar />

     <div className="content">
      <Home />
     </div>
    </div>
  );
}

export default App;
