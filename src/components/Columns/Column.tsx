

import TaskList from "../Tasks/TaskList";
import { Droppable } from "react-beautiful-dnd";
import React, { useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks";
import { createTask } from "../../shared/api/api";
import { nanoid } from "nanoid";

type ColumnProps = {
    id: string;
    title: string;
    boardId: string;
};



const Column: React.FC<ColumnProps> = React.memo(({ id, title }) => {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(state => state.tasks);
    const sortedTasks = useMemo(() => tasks.filter(t => t.columnId === id).sort((a, b) => (a.order ?? 0) - (b.order ?? 0)), [tasks, id]);
    const [showInput, setShowInput] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCreateTask = async () => {
        if (!taskTitle.trim()) return;
        setLoading(true);
        const newTask = {
            id: nanoid(),
            title: taskTitle,
            completed: false,
            columnId: id,
            order: sortedTasks.length
        };
        await dispatch(createTask(newTask));
        setTaskTitle("");
        setShowInput(false);
        setLoading(false);
    };

    return (
        <div className="bg-gray-100 rounded-lg shadow-md p-4 w-72 flex flex-col min-h-50">
            <h2 className="font-bold text-lg mb-3 text-gray-700">{title}</h2>
            <Droppable droppableId={id} type="task">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="flex-1">
                        <TaskList tasks={sortedTasks} columnId={id} />
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <div className="mt-auto pt-2">
                {showInput ? (
                    <div className="flex flex-col gap-2">
                        <input
                            className="border rounded px-2 py-1"
                            type="text"
                            value={taskTitle}
                            onChange={e => setTaskTitle(e.target.value)}
                            placeholder="Название задачи"
                            disabled={loading}
                        />
                        <div className="flex gap-2">
                            <button
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                                onClick={handleCreateTask}
                                disabled={loading}
                            >
                                {loading ? "Создание..." : "Создать"}
                            </button>
                            <button
                                className="bg-gray-300 px-2 py-1 rounded"
                                onClick={() => { setShowInput(false); setTaskTitle(""); }}
                                disabled={loading}
                            >Отмена</button>
                        </div>
                    </div>
                ) : (
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded w-full"
                        onClick={() => setShowInput(true)}
                    >
                        + Создать задачу
                    </button>
                )}
            </div>
        </div>
    );
});
export default React.memo(Column);