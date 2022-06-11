import { createContext,useReducer } from "react";
import appReducer from './AppReducer';
import {v4} from 'uuid'

const InitialState = {
  tasks: [
    {
      id: "1",
      title: "some title 1",
      description: "some description 2",
      done: false,
    },
    {
      id: "2",
      title: "some title 2",
      description: "some description 2",
      done: false,
    },
  ],
};

export const GlobalContext = createContext(InitialState);

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer,InitialState);  

  const addTask = (task) => {
    dispatch({type: 'ADD_TASK', payload: {...task, id: v4()}})
  };
  const deleteTask = (id) => {
    dispatch({type: 'DELETE_TASK', payload: id })
  };
  const updateTask = (updatedTask) => {
    dispatch({type: 'UPDATE_TASK', payload: updatedTask})
  };
  const toggleTaskDone = (id) => {
    dispatch({type: 'TOGGLE_TASK', payload: id})
  };
  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask, updateTask, toggleTaskDone }}>
      {children}
    </GlobalContext.Provider>
  );
};
