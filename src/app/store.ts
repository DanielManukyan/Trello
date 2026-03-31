import { configureStore } from "@reduxjs/toolkit";
import boardReducer from '../entities/Boards/BoardSlice'
import columnReducer from '../entities/Columns/ColumnSlice'
import taskReducer from '../entities/Tasks/TaskSlice';

export const store = configureStore({
    reducer: {
        boards: boardReducer,
        columns: columnReducer,
        tasks: taskReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;



