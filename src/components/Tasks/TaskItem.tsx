import { type ITask } from '../../entities/types/ITask';

const TaskItem: React.FC<ITask> = ({ title, completed }) => {
    return (
        <div className="bg-white rounded shadow p-3 border hover:bg-gray-50 cursor-pointer transition">
            <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">{title}</span>
                {completed && <span className="text-xs text-green-500 ml-2">✔</span>}
            </div>
        </div>
    );
};

export { TaskItem };