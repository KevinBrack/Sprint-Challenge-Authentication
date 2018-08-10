import React, { Component } from "react";
import axios from "axios";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwt");

    const requestOptions = {
      headers: {
        Authorization: token
      }
    };

    axios
      .get("http://localhost:5000/api/jokes", requestOptions)
      .then(res => {
        console.log("JOKES RESPONSE", res);
        this.setState({ jokes: res.data });
      })
      .catch(error => console.log("axios failed"));
  }

  render() {
    return (
      <div className="JokesList">
        {this.state.jokes.map(joke => {
          return (
            <div key={joke.id}>
              <h4>{joke.setup}</h4>
              <h3>{joke.punchline}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Jokes;
