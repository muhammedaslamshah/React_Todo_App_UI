import React, { Component } from "react";
import "./TodoApp.css";
export default class TodoApp extends Component {
  render() {
    return (
      <div className="todo-container">
        <form className="input-section">
          <h1>Todo App</h1>
          <input type="text" placeholder="Enter items..." />
        </form>

        <ul>
          <li>Itemsi <i className="fas fa-trash-alt"></i></li>
          <li>Items</li>
        </ul>
      </div>
    );
  }
}
