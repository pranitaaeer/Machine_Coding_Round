
import { useState } from "react";
import axios from "axios";

const TodoModal = ({ onClose, onCreated }) => {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "http://localhost:4000/api/create",
        {
          title: todo,
          description
        }
      );

      console.log(res.data);

      await onCreated();
      onClose();

    } catch (error) {
      console.log(error);
      setError("Unable to create todo. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="todo-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          type="button"
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-header">
          <div className="modal-icon">✦</div>
          <h2>Create New Todo</h2>
          <p>Add a new task to your workspace.</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Title</label>

            <input
              type="text"
              placeholder="Enter your todo title"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              placeholder="Write something about your task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>

          {error && (
            <p className="error-message">{error}</p>
          )}

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Todo"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default TodoModal;
