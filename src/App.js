import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./ducks/store";
import NavBar from "./components/NavBar";
import routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <h1>Marvel Character Search</h1>
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
