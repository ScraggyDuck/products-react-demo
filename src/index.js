import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import TopMenu from "./components/top-menu";
import Home from "./pages/home";
import Products from "./pages/products";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
      </div>

      <Route path="/" exact component={Home} />
      <Route path="/products/" component={Products} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
