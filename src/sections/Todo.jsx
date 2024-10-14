import React from 'react';
import './static/Todo.css';

const Todo = () => {
  return (
    <div className="todoContainer">
      <h2>TODO List Demo App</h2>
      <table className="todoTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24</td>
            <td>Buy Grocery</td>
            <td><span className="status todo">Todo</span></td>
            <td><button className="edit-btn">✏️</button></td>
            <td><button className="remove-btn">🗑️</button></td>
          </tr>
          <tr>
            <td>25</td>
            <td>Send Email</td>
            <td><span className="status in-progress">In Progress</span></td>
            <td><button className="edit-btn">✏️</button></td>
            <td><button className="remove-btn">🗑️</button></td>
          </tr>
          <tr>
            <td>28</td>
            <td>Finish Assignment</td>
            <td><span className="status complete">Complete</span></td>
            <td><button className="edit-btn">✏️</button></td>
            <td><button className="remove-btn">🗑️</button></td>
          </tr>
        </tbody>
      </table>
      <button className="addTaskBtn">Add Task</button>
    </div>
  );
};

export default Todo;
