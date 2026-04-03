import { createSlice } from "@reduxjs/toolkit";
import { type ITask } from "../types/ITask";
import {
  createTask,
  fetchTasks,
  removeTask,
  updateTask,
  updateTasksOrder,
  moveTask,
  toggleTask 
} from "../../shared/api/api";

export const initialState: ITask[] = [];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const index = state.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        return state.filter(task => task.id !== action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.findIndex(t => t.id === action.payload.id);
        if (index !== -1) state[index] = action.payload;
      })
      .addCase(updateTasksOrder.fulfilled, (state, action) => {
        action.payload.forEach((updatedTask) => {
          const idx = state.findIndex(t => t.id === updatedTask.id);
          if (idx !== -1) state[idx] = updatedTask;
        });
      })
      .addCase(moveTask.fulfilled, (state, action) => {
        const idx = state.findIndex(t => t.id === action.payload.id);
        if (idx !== -1) state[idx] = action.payload;
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        const index = state.findIndex(t => t.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      });
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;