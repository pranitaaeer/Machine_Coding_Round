
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoModal from "./components/TodoModal";
import axios from "axios";

const API = "http://localhost:4000/api";

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET TODOS
  const getTodo = async () => {
    try {
      const res = await axios.get(`${API}/get-todo`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  // DELETE TODO
  const deleteTodo = async (id) => {
    try {
      const res = await axios.delete(
        `${API}/delete-todo/${id}`
      );


      setTodos((prev) =>
        prev.filter((todo) => todo._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">✓</span>
          TaskFlow
        </div>

        <span className="nav-label">My Workspace</span>
      </nav>

      <main className="todos">

        {/* Header */}
        <div className="dashboard-header">
          <div>
            <p className="sub-heading">YOUR WORKSPACE</p>
            <h1>My Todos</h1>
            <p className="header-desc">
              Organize your tasks and get things done.
            </p>
          </div>

          <button
            className="btn1"
            onClick={() => setIsOpenModal(true)}
          >
            <span>+</span> Create Todo
          </button>
        </div>

        {/* Todo Information */}
        <div className="todo-info">
          <div>
            <h3>All Tasks</h3>
            <p>{todos.length} tasks in total</p>
          </div>
        </div>

        {/* Todo Cards */}
        <div className="container">

          {loading ? (
            <div className="empty-state">
              <p>Loading your todos...</p>
            </div>
          ) : todos.length > 0 ? (

            todos.map((todo) => (
              <div className="cards" key={todo._id}>

                <div className="card-top">
                  <span className="task-label">
                    TASK
                  </span>

                  <span className="task-dot"></span>
                </div>

                <div className="content">
                  <h2>{todo.title}</h2>

                  <p>
                    {todo.description || "No description provided."}
                  </p>
                </div>

                <div className="card-footer">
                  <button
                    className="iscomplete_btn"
                    onClick={() => deleteTodo(todo._id)}
                  >
                    <span>✅</span> Iscompleted
                  </button>

                  <button
                    className="btn"
                    onClick={() => deleteTodo(todo._id)}
                  >
                    <span>×</span> Delete
                  </button>
                </div>

              </div>
            ))

          ) : (

            <div className="empty-state">
              <div className="empty-icon">✦</div>
              <h2>No todos found</h2>
              <p>
                You don't have any tasks yet.
                Create your first todo to get started!
              </p>

              <button
                className="empty-btn"
                onClick={() => setIsOpenModal(true)}
              >
                + Create your first todo
              </button>
            </div>

          )}

        </div>

        {/* Todo Modal */}
        {isOpenModal && (
          <TodoModal
            onClose={() => setIsOpenModal(false)}
            onCreated={getTodo}
          />
        )}

      </main>
    </div>
  );
};

export default App;
