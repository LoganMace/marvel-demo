import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
