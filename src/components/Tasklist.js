import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalcontext";
import { Link } from "react-router-dom";

const Tasklist = () => {
  const { tasks, deleteTask, toggleTaskDone  } = useContext(GlobalContext);

  return (
    <div className="flex justify-center">
      {/* <button className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center" onClick={() => deleteTask()}>BORRAR TODO</button> */}
      <div className="w-6/12">
        {tasks.map((t) => (
          <div className="bg-gray-900 px-20 py-5 text-white shadow-2xl mb-4 flex justify-between">
            <div>
              <h1 className="text-2xl uppercase">{t.title}</h1>
              <h6 className="text-gray-500">{t.id}</h6>
            </div>
            <div>
              <p>{t.description}</p>
            </div>

            <div>
              <button className="bg-purple-600 hover:bg-purple-500  py-2 px-2 mr-2"
              onClick={() => toggleTaskDone(t.id)}>
                {t.done ? "undone" : "DONE"}
              </button>
              <button
                className="bg-red-600 hover:gb-red-500 py-2 px-2 mr-2"
                onClick={() => deleteTask(t.id)}
              >
                DELETE
              </button>
              <Link to={`/edit/${t.id}`}>
                <button className="bg-yellow-600 hover:gb-yellow-500 py-2 px-2 mr-2">
                  EDIT
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasklist;
