import { type ITask } from "../../entities/types/ITask";

interface ITaskListProps {
    tasks: ITask[]
}

const TaskList: React.FC<ITaskListProps> = (props) => {
    const { tasks } = props;
    return ( 
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    {task.title}
                </div>
            ))}
        </div>
     );
}

export { TaskList };