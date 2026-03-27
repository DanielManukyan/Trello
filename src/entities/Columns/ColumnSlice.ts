import { createSlice } from "@reduxjs/toolkit";
import type { IColumn } from "../types/IColumn";
import { createColumn, fetchColumns, removeColumn, updateColumn } from "../../shared/api/api";

export const initialState: IColumn[] = []

export const columnSlice = createSlice({
    name: "columns",
    initialState,
    reducers: {
        addColumn: (state, action) => {
            state.push(action.payload)
        },
        deleteColumn: (state, action) => {
            return state.filter(board => board.id !== action.payload)
        },
        editColumn: (state, action) => {
            const index = state.findIndex(b => b.id === action.payload.id)
            if (index !== -1) {
                state[index] = action.payload
            }
        },
    },
    extraReducers: (builder) => {
    builder
      .addCase(fetchColumns.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(createColumn.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeColumn.fulfilled, (state, action) => {
        return state.filter(board => board.id !== action.payload);
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        const index = state.findIndex(b => b.id === action.payload.id);
        if (index !== -1) state[index] = action.payload;
      });
  },
});
export const { addColumn, editColumn, deleteColumn} = columnSlice.actions
export default columnSlice.reducer