import { type ITask } from '../../entities/types/ITask';

const TaskItem: React.FC<ITask> = (props) => {
    const { id, title, completed } = props
    return ( 
        <div>
            <p>{id}</p>
            <h3>{title}</h3>
            <p>Status: {completed ? 'Completed' : 'Not Completed'}</p>
        </div>
     );
}

export { TaskItem };