import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div style={{ backgroundColor: "pink"}}>
      <div className="flex items-center mb-10" >
        <Link to="/">
          <h5 className="text-grey-100 font-bold text-2x1 pl-3">Task app</h5>
        </Link>
      <div className="flex-grow text-right px-4 py-2 m-2">
        <Link to="/add">
          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
            add a Task
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Heading;
