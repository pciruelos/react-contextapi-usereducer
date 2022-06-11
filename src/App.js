import { Route, Routes } from "react-router-dom";
import "./components/Heading";
import "./components/Taskform";
import "./components/Tasklist";
import "./App.css";
import Heading from "./components/Heading";
import Tasklist from "./components/Tasklist";
import Taskform from "./components/Taskform";

import { ContextProvider } from "./context/Globalcontext";

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center" >
        <ContextProvider>
          <Heading />
          <Routes>
            <Route path="/" element={<Tasklist />} exact />
            <Route path="/add" element={<Taskform />} />
            <Route path="/edit/:id" element={<Taskform />} />
          </Routes>
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
