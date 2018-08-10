import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

// COMPONENTS //
import Login from "./components/Login/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "http://localhost:5000",
      token: ""
    };
  }

  handleNewToken = token => {
    this.setState({ token });
  };

  render() {
    return (
      <div className="App">
        <Route
          path="/login"
          render={props => (
            <Login {...props} tokenHandler={this.handleNewToken} />
          )}
        />
      </div>
    );
  }
}

export default App;
