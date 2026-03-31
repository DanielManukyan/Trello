// Обновить порядок колонок в board
export const updateColumnsOrder = createAsyncThunk(
  "boards/updateColumnsOrder",
  async ({ boardId, columnsIds }: { boardId: string, columnsIds: string[] }) => {
    const res = await fetch(`${API_URL}/boards/${boardId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ columnsIds })
    });
    return res.json();
  }
);

// Обновить порядок задач в колонке
export const updateTasksOrder = createAsyncThunk(
  "tasks/updateTasksOrder",
  async ({ tasks }: { tasks: ITask[] }) => {
    // PATCH для каждой задачи
    await Promise.all(tasks.map((task, idx) =>
      fetch(`${API_URL}/tasks/${task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: idx })
      })
    ));
    return tasks.map((t, idx) => ({ ...t, order: idx }));
  }
);

// Переместить задачу между колонками
export const moveTask = createAsyncThunk(
  "tasks/moveTask",
  async ({ taskId, toColumnId, order }: { taskId: string, toColumnId: string, order: number }) => {
    const res = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ columnId: toColumnId, order })
    });
    return res.json();
  }
);
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IBoard } from "../../entities/types/IBoard";
import type { IColumn } from "../../entities/types/IColumn";
import type { ITask } from "../../entities/types/ITask";

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

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    const res = await fetch(`${API_URL}/tasks`);
    return res.json();
  }
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (task: ITask) => {
    const res = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    return res.json();
  }
);

export const removeTask = createAsyncThunk(
  "tasks/removeTask",
  async (id: string) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task: ITask) => {
    const res = await fetch(`${API_URL}/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    return res.json();
  }
);