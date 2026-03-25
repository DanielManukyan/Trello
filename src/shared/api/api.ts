import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IBoard } from "../../entities/types/IBoard";

const API_URL = "http://localhost:3001/boards";

export const fetchBoards = createAsyncThunk(
  "boards/fetchBoards",
  async () => {
    const res = await fetch(API_URL);
    return res.json();
  }
);

export const createBoard = createAsyncThunk(
  "boards/createBoard",
  async (board: IBoard) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(board),
    });
    return res.json();
  }
);

export const removeBoard = createAsyncThunk(
  "boards/removeBoard",
  async (id: string) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

export const updateBoard = createAsyncThunk(
  "boards/updateBoard",
  async (board: IBoard) => {
    const res = await fetch(`${API_URL}/${board.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(board),
    });
    return res.json();
  }
);