import React, { Component } from "react";
import { connect } from "react-redux";
import Collapsible from "react-collapsible";
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
        {this.props.todo.map((node, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <Collapsible trigger={node.name}>
                <div className="card-body">
                  <p>
                    {node.text} by, {node.name}
                  </p>
                  <p>
                    <small className="text-muted">{node.createdAt}</small>
                  </p>
                </div>
              </Collapsible>
            </div>
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
