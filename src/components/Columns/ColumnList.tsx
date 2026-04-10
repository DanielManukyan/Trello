

import type { IColumn } from "../../entities/types/IColumn";
import Column from "./Column";
import React, { useState } from "react";
import { useAppDispatch } from "../../shared/lib/hooks";
import { nanoid } from "nanoid";

import * as dnd from "react-beautiful-dnd";
import { createColumn } from "../../shared/api/api";

type ColumnListProps = {
    columns?: IColumn[];
    boardId?: string;
};

const ColumnList: React.FC<ColumnListProps> = ({ columns = [], boardId = "" } = {}) => {
    const dispatch = useAppDispatch();

    const boardColumns = columns.filter(c => c.boardId === boardId);

    const sortedColumns = [...boardColumns].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    const [showInput, setShowInput] = useState(false);
    const [columnName, setColumnName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCreateColumn = async () => {
        if (!columnName.trim()) return;
        setLoading(true);
        const maxOrder = boardColumns.length > 0 ? Math.max(...boardColumns.map(c => c.order ?? 0)) : -1;
        const newColumn = {
            id: nanoid(),
            title: columnName,
            boardId,
            order: maxOrder + 1,
        };
        await dispatch(createColumn(newColumn));
        setColumnName("");
        setShowInput(false);
        setLoading(false);

        return false;
    };

    return (
        <div className="flex flex-row gap-4">
            <dnd.Droppable droppableId="columns-droppable" direction="horizontal" type="column">
                {(provided) => (
                    <div
                        className="flex flex-row gap-4"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {sortedColumns.length === 0 && (
                            <div className="text-gray-400 w-40 p-4">Нет колонок !</div>
                        )}
                        {sortedColumns.map((column, idx) => (
                            <dnd.Draggable draggableId={column.id} index={idx} key={column.id}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Column title={column.title} id={column.id} boardId={column.boardId} />
                                    </div>
                                )}
                            </dnd.Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </dnd.Droppable>
            <div className="flex flex-col items-center justify-center">
                {showInput ? (
                    <div className="flex flex-col gap-2">
                        <input
                            className="border rounded px-2 py-1"
                            type="text"
                            value={columnName}
                            onChange={e => setColumnName(e.target.value)}
                            placeholder="Название колонки"
                            disabled={loading}
                        />
                        <div className="flex gap-2">
                            <button
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                                onClick={handleCreateColumn}
                                disabled={loading}
                                type="button"
                            >
                                {loading ? "Создание..." : "Создать"}
                            </button>
                            <button
                                className="bg-gray-300 px-2 py-1 rounded"
                                onClick={() => { setShowInput(false); setColumnName(""); }}
                                disabled={loading}
                            >Отмена</button>
                        </div>
                    </div>
                ) : (
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded"
                        onClick={() => setShowInput(true)}
                    >
                        + Создать колонку
                    </button>
                )}
            </div>
        </div>
    );
};
export default React.memo(ColumnList);