import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbox from "./components/Navbox";
import Routing from "./components/Routing";

function App() {
  return (
    <>
      <Navbox />
      <Routing />
    </>
  );
}

export default App;
