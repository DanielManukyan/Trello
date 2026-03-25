import { createSlice } from "@reduxjs/toolkit";
import type { IBoard } from "../types/IBoard";
import { createBoard, fetchBoards, removeBoard, updateBoard } from "../../shared/api/api";

export const initialState: IBoard[] = [
    {
        id: '1231aqd',
        title: 'test',
        status: 'Private'
    },
    {
        id: '1231a2qd',
        title: 'teswt',
        status: 'Public'
    }
]

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
      });
  },
});
export const { addBoard, editBoard, deleteBoard} = boardSlice.actions
export default boardSlice.reducer