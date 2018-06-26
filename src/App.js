import React, { Component } from "react";
import "./App.css";
import { Mainview } from "./components/Mainview";
import store from "./store";
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Mainview />
      </Provider>
    );
  }
}

export default App;
