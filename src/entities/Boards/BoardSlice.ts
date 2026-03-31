import { createSlice } from "@reduxjs/toolkit";
import type { IBoard } from "../types/IBoard";
import { createBoard, fetchBoards, removeBoard, updateBoard, updateColumnsOrder } from "../../shared/api/api";

export const initialState: IBoard[] = []

export const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        addBoard: (state, action) => {
            state.push(action.payload)
        },
        deleteBoard: (state, action) => {
            return state.filter(board => board.id !== action.payload)
        },
        editBoard: (state, action) => {
            const index = state.findIndex(b => b.id === action.payload.id)
            if (index !== -1) {
                state[index] = action.payload
            }
        },
    },
    extraReducers: (builder) => {
    builder
      .addCase(fetchBoards.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBoard.fulfilled, (state, action) => {
        return state.filter(board => board.id !== action.payload);
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        const index = state.findIndex(b => b.id === action.payload.id);
        if (index !== -1) state[index] = action.payload;
      })
      .addCase(updateColumnsOrder.fulfilled, (state, action) => {
        const idx = state.findIndex(b => b.id === action.payload.id);
        if (idx !== -1) state[idx] = action.payload;
      });
  },
});
export const { addBoard, editBoard, deleteBoard} = boardSlice.actions
export default boardSlice.reducer