import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/Globalcontext";

const Taskform = () => {
  const { addTask, tasks, updateTask } = useContext(GlobalContext);

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const params = useParams();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }
    navigate("/");
  };

  useEffect(() => {
    const taskFound = tasks.find((t) => t.id === params.id);

    if (taskFound) {
      setTask(taskFound);
    } else {
    }
  }, [params.id]);

  return (
    <div className="flex justify-center items-center h-3/4">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-10">
        <h2 className="text-3xl mb-7">
          {task.id ? "Editing the task" : "Creando una tarea"}
        </h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={task.title}
            placeholder="Write a title"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            autoFocus
          />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            rows="2"
            placeholder="write a description"
            onChange={handleChange}
            value={task.description}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          ></textarea>
          <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
            {task.id ? "Edit" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Taskform;
