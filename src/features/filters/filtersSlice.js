import { createSlice } from "@reduxjs/toolkit";

export const statusFilters = {
  all: "all",
  active: "active",
  completed: "completed"
}

const initialState = {
  status: statusFilters.all,
  priorities: []
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    statusFilterChanged(state, action) {
      state.status= (action.payload)
    },
    priorityFilterChanged: {
      reducer(state, action) {
        const {priority, actionType} = action.payload;
        const { priorities } = state;
        switch(actionType) {
          case "added": {
            if (!priorities.includes(priority)) {
              priorities.push(priority)
            }
            break;
          }
          case "removed": {
            state.priorities = priorities.filter(existingPriority => existingPriority !== priority);
            break;
          }
          default: return
        }
      },
      prepare(priority, actionType) {
        return {
          payload: {
            priority,
            actionType
          }
        }
      }
    }
  }
});

export const { statusFilterChanged, priorityFilterChanged } = filtersSlice.actions;
export const selectStatus = state => state.filters.status;

export default filtersSlice.reducer;