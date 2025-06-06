import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "phase-4-flask-api-code-challenge-pizza-restaurants-client/src/index.css";
import App from "phase-4-flask-api-code-challenge-pizza-restaurants-client/src/components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
