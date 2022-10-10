import  { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const projectsAdapter = createEntityAdapter();

const emptyInitialState = projectsAdapter.getInitialState();
const defaultState = projectsAdapter.upsertOne(emptyInitialState, {title: "Home", id: nanoid(), taskAmount: 0, tasks: [] });
console.log(defaultState);

const projectsSlice = createSlice({
  name: "projects",
  initialState: defaultState,
  reducers: {
    addProject: projectsAdapter.addOne,
    removeProject: projectsAdapter.removeOne,
    addTaskToProject(state, action) {
      const { projectId, taskId } = action.payload;
      state.entities[projectId].tasks.push(taskId);
    }
  }
});

export const { selectAll: selectAllProjects, selectById: selectProjectById } = projectsAdapter.getSelectors(state => state.projects);

export const { addProject, removeProject, addTaskToProject } = projectsSlice.actions;

export default projectsSlice.reducer;