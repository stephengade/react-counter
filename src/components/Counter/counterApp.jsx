import React, { Component } from "react";
import "./Counter.css";

class CounterApp extends Component {
  state = {
    count: 0,
    tags: ["shoes", "clothes", "books"],
  };

  showTags() {
    if (this.state.tags.length === 0)
      return (
        <p className="text-success">
          Shit! No tag here... The Admin is sleeping
        </p>
      );

    return (
      <ul className="counter-list">
        {" "}
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag}</li>
        ))}{" "}
      </ul>
    );
  }

  plusHandle = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  minusHandle = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter-app container">
        <h2 className="display-4">I am a Counter App</h2>

        <div className="row ">
          <div className="col-md-6 d-flex mx-auto justify-content-center">
            <button
              onClick={this.minusHandle}
              className="btn btn-danger btn-sm "
            >
              -
            </button>

            <div className="current-count">
              <span className={this.counterStyle()}>
                {this.handleIncrease()}
              </span>
            </div>

            <button
              onClick={this.plusHandle}
              className="btn btn-primary btn-sm"
            >
              +
            </button>
          </div>
        </div>

        <div>{this.showTags()}</div>
      </div>
    );
  }

  counterStyle() {
    let styles = "badge m-5 badge-";
    styles += this.state.count === 0 ? "warning" : "success p-3";
    return styles;
  }

  handleIncrease() {
    const { count } = this.state;

    return count === 0 ? <h1>ZERO!</h1> : count;
  }
}

export default CounterApp;
