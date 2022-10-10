import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

import { statusFilters } from "../filters/filtersSlice";

const tasksAdapter = createEntityAdapter();

const initialState = tasksAdapter.getInitialState({});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: tasksAdapter.addOne,
    removeTask: tasksAdapter.removeOne,
    toggleTaskSelect: tasksAdapter.updateOne,
    taskToggled(state, action) {
      const taskId = action.payload;
      const task = state.entities[taskId];
      task.selected = !task.selected;
    },
    taskPriorityChanged: tasksAdapter.updateOne,

  }
});

export const { addTask, removeTask, toggleTaskSelect, taskToggled, taskPriorityChanged } = tasksSlice.actions;

export const { selectAll: selectAllTasks, selectById: selectTaskById } = tasksAdapter.getSelectors(state => state.tasks);

export const selectTasksByProjectId = createSelector(
  [selectAllTasks, (state, projectId) => projectId],
  (tasks, projectId) => tasks.filter(task => task.projectId === projectId)
);

export const selectFilteredTasks = createSelector(
  [
    state => state.filters,
    selectTasksByProjectId,
  ],

  (filters, tasks) => {
    const { status, priorities } = filters;
    
    const showAllOccurences = status === statusFilters.all; //default
    if (showAllOccurences && priorities.length === 0) return tasks;

    const completedStatus = status === statusFilters.completed;
    return tasks.filter(task => {
      const statusMatches = showAllOccurences || task.selected === completedStatus;
      const priorityMatches = priorities.length === 0 || priorities.includes(task.priority)
      return statusMatches && priorityMatches;
    });
  }
);

export const selectFilteredTaskIds = createSelector(
  selectFilteredTasks,
  filteredTasks => filteredTasks.map(task => task.id)
);


export default tasksSlice.reducer;