export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
       
      case "TOGGLE_TASK_DONE":
        const updatedTasks = state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, done: !task.done };
          }
          return task;
        });
        return {
          ...state,
          tasks: updatedTasks,
        };

    case "UPDATE_TASK": {
      const updatedTask = action.payload;

      const updatedTasks = state.tasks.map((t) => {
        if (t.id === updatedTask.id) {
          updatedTask.done = t.done;
          return updatedTask;
        }
        return t;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    }

    default:
      return state;
  }
}
