import { useState } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Task from "./components/TaskCard/Task";
import logo from "./assets/logo.svg";
import Footer from "./components/footer/Footer";

const validate = (values) => {
  const errors = {};
  if (!values.task) {
    errors.task = "Required";
  }

  return errors;
};

function App() {
  const [tasks, setTask] = useState([]);

  const handleDelete = (id) => setTask(tasks.filter((task) => task.id !== id));
  const formik = useFormik({
    initialValues: {
      task: "",
      date: "",
      reminder: false,
    },
    validate,
    onSubmit: (values) => {
      const { task, date, reminder } = values;
      setTask([...tasks, { id: uuidv4(), task, date, reminder }]);
    },
  });

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="logo-wrapper">
          <h1 className="logo">Task Tracker</h1>
          <img src={logo} alt="company logo" />
        </div>

        <form onSubmit={formik.handleSubmit}>
          <label>
            <p>Task</p>
            <input
              type="text"
              id="task"
              placeholder="Do the dishes..."
              onChange={formik.handleChange}
              value={formik.values.task}
              style={formik.errors.task ? { border: "solid 1px red" } : null}
            />
          </label>
          <label>
            <p> Date & Time</p>
            <input
              type="datetime-local"
              id="date"
              className="datetime-input"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
          </label>

          <div className="checkbox-input">
            <p>Set Reminder</p>
            <input
              type="checkbox"
              id="reminder"
              onChange={formik.handleChange}
              value={formik.values.toggle}
            />
          </div>

          <button type="submit" className="submit-btn">
            Save Task
          </button>
        </form>
      </div>
      <h2>Tasks</h2>
      {tasks.length ? (
        tasks.map((val) => (
          <Task task={val} key={val.id} onDelete={handleDelete} />
        ))
      ) : (
        <p style={{ opacity: 0.6 }}>You have no tasks!!</p>
      )}
      <Footer />
    </div>
  );
}

export default App;
