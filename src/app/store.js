import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from "../features/projects/projectsSlice";
import tasksReducer from "../features/tasks/tasksSlice";
import filtersReducer from '../features/filters/filtersSlice';

const saveToLocalStorage = state => {
  try {
    localStorage.setItem("TODOS", JSON.stringify(state))
  } catch(error) {
    console.error(error);
  }
}

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("TODOS");
    return stateStr ? JSON.parse(stateStr) : [];
  } catch(error) {
    console.error(error);
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
    filters: filtersReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => {saveToLocalStorage(store.getState())})
