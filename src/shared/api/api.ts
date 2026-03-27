import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IBoard } from "../../entities/types/IBoard";
import type { IColumn } from "../../entities/types/IColumn";

const API_URL = "http://localhost:3001";

export const fetchBoards = createAsyncThunk(
  "boards/fetchBoards",
  async () => {
    const res = await fetch(`${API_URL}/boards`);
    return res.json();
  }
);

export const createBoard = createAsyncThunk(
  "boards/createBoard",
  async (board: IBoard) => {
    const res = await fetch(`${API_URL}/boards`, {
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
    await fetch(`${API_URL}/boards/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

export const updateBoard = createAsyncThunk(
  "boards/updateBoard",
  async (board: IBoard) => {
    const res = await fetch(`${API_URL}/boards/${board.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(board),
    });
    return res.json();
  }
);

export const fetchColumns = createAsyncThunk(
  "columns/fetchColumns",
  async () => {
    const res = await fetch(`${API_URL}/columns`);
    return res.json();
  }
);

export const createColumn = createAsyncThunk(
  "columns/createColumn",
  async (column: IColumn) => {
    const res = await fetch(`${API_URL}/columns`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(column),
    });
    return res.json();
  }
);

export const removeColumn = createAsyncThunk(
  "columns/removeColumn",
  async (id: string) => {
    await fetch(`${API_URL}/columns/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

export const updateColumn = createAsyncThunk(
  "columns/updateColumn",
  async (column: IColumn) => {
    const res = await fetch(`${API_URL}/columns/${column.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(column),
    });
    return res.json();
  }
);