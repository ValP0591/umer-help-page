import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ModalWindow from "./Modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ПОМОЩЬ С ПОХОРОНАМИ 24 ЧАСА В СУТКИ</h1>
        <div className="row buttons">
          <ModalWindow />

          <Button variant="light" size="lg" active="true" href="http://umer.site">
            Перейти в интернет-магазин
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
