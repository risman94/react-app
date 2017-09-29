import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodoAction } from "../actions/todoAction";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
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
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Masukan Text"
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
          />
          <button> Add Todo </button>
        </form>
        {this.props.todo.map((node, index) => (
          <div key={index}>
            {node.text}, {node.createdAt}, {node.name}
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
