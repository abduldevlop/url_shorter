import React from "react";
import Form from "./components/Form";

import "./App.css";
import BackroundAnimation from "./components/BackroundAnimation";
import ResultUrl from "./components/ResultUrl";
const App = () => {
  return (
    <div className="app">
      <BackroundAnimation />
      <div className="main_container">
        <Form />
        <ResultUrl />
      </div>
    </div>
  );
};

export default App;
