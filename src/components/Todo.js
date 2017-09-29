import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodoAction } from "../actions/todoAction";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      toggle: false
    };
  }

  show(e) {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(addTodoAction(this.state.value));
    this.setState({
      value: ""
    });
  }
  render() {
    return (
      <div className="container">
        <hr />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="submit">
                  Add!
                </button>
              </span>
              <input
                className="form-control"
                type="text"
                placeholder="Insert Name"
                onChange={this.handleChange.bind(this)}
                value={this.state.value}
              />
            </div>
          </div>
        </form>
        <hr />
        <button className="btn btn-primary" onClick={this.show.bind(this)}>
          show/hide
        </button>
        {this.props.todo.map((node, index) => (
          <div key={index}>
            <ul>
              <li>
                <p>{node.name}</p>
              </li>
            </ul>
            {this.state.toggle ? (
              <div>
                <p> id : {node.id}</p>
                <p> name : {node.name}</p>
                <p>
                  text : {node.text}, by {node.name}
                </p>
                <p> createdAt : {node.createdAt}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(Todo);
