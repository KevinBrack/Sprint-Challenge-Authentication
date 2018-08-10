import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

// COMPONENTS //
import Login from "./components/Login/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        headers: { authentication: "" }
      },
      url: "http://localhost:8000"
    };
  }

  handleLoginSubmit = credentials => {};

  handleRegisterSubmit = credentials => {};

  handleFetchUsers = () => {
    const config = this.state.config;
  };

  render() {
    return (
      <div className="App">
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
