import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../shared/lib/hooks";
import { useEffect } from "react";
import {
  fetchColumns,
  fetchTasks,
  updateTasksOrder,
  moveTask,
  updateColumn
} from "../../shared/api/api";

import { ColumnList } from "../Columns/ColumnList";
import { DragDropContext, type DropResult } from "react-beautiful-dnd";
import type { IColumn } from "../../entities/types/IColumn";
import BoardPageHeader from '../Headers/BoardPageHeader';
import Header from "../Headers/Header";

function BoardPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchColumns());
    dispatch(fetchTasks());
  }, [dispatch]);

  const board = useAppSelector(state => state.boards.find(b => b.id === id));
  const columns: IColumn[] = useAppSelector(state => state.columns);
  const tasks = useAppSelector(state => state.tasks);

  const boardColumns: IColumn[] = columns
    .filter(col => col.boardId === id)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const onDragEnd = async (result: DropResult) => {
    const { source, destination, type, draggableId } = result;
    if (!destination) return;

    if (type === "column") {
      const newColumns = Array.from(boardColumns);
      const [removed] = newColumns.splice(source.index, 1);
      newColumns.splice(destination.index, 0, removed);

      for (let i = 0; i < newColumns.length; i++) {
        if (newColumns[i].order !== i) {
          await dispatch(updateColumn({ ...newColumns[i], order: i }));
        }
      }
    }

    if (type === "task") {
      const sourceColId = source.droppableId;
      const destColId = destination.droppableId;

      const sourceTasks = tasks
        .filter(t => t.columnId === sourceColId)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

      const destTasks = tasks
        .filter(t => t.columnId === destColId)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

      if (sourceColId === destColId) {
        const newTasks = Array.from(sourceTasks);
        const [removed] = newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, removed);

        await dispatch(updateTasksOrder({
          tasks: newTasks.map((t, idx) => ({ ...t, order: idx }))
        }));
      } else {
        const sourceCopy = Array.from(sourceTasks);
        const [removed] = sourceCopy.splice(source.index, 1);

        const destCopy = Array.from(destTasks);
        destCopy.splice(destination.index, 0, removed);

        await dispatch(moveTask({
          taskId: draggableId,
          toColumnId: destColId,
          order: destination.index
        }));

        await dispatch(updateTasksOrder({
          tasks: sourceCopy.map((task, idx) => ({ ...task, order: idx }))
        }));

        await dispatch(updateTasksOrder({
          tasks: destCopy.map((task, idx) => ({ ...task, order: idx }))
        }));
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col h-full">
        <Header />

        <BoardPageHeader boardName={board?.title || 'Доска'} />

        <div className="flex-1 overflow-x-auto overflow-y-hidden">
          <div className="h-full p-4 min-w-max">
            <ColumnList columns={boardColumns} boardId={id || ''} />
          </div>
          <p>
            <span className="text-sm text-gray-500"></span>
          </p>
        </div>

      </div>
    </DragDropContext>
  );
}

export default BoardPage;