import React from "react";
import { type ITask } from "../../entities/types/ITask";
import TaskItem from "./TaskItem";
import { Draggable } from "react-beautiful-dnd";


interface ITaskListProps {
    tasks: ITask[];
    columnId: string;
}

const TaskList: React.FC<ITaskListProps> = ({ tasks = [] }) => {
    if (!tasks.length) {
        return <div className="text-gray-400 text-center py-2">Нет задач</div>;
    }
    return (
        <div className="flex flex-col gap-2">
            {tasks.map((task, idx) => (
                <Draggable draggableId={task.id} index={idx} key={task.id}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <TaskItem {...task} />
                        </div>
                    )}
                </Draggable>
            ))}
        </div>
    );
};

export default React.memo(TaskList);