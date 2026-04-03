import { useState } from 'react';
import { type ITask } from '../../entities/types/ITask';

const TaskItem: React.FC<ITask> = ({ title }) => {
    const [hover, setHover] = useState(false);
    const [checked, setChecked] = useState(false);

    const visible = hover || checked;

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="bg-white rounded-xl shadow-sm p-3 hover:bg-gray-50 cursor-pointer transition-all duration-200"
        >
            <div className="flex items-center justify-between">

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        className={`w-5 h-5 cursor-pointer transition-all duration-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}/>
                    <span
                        className={`font-medium transition-all duration-300 ${checked ? 'line-through text-gray-400' : 'text-gray-800'} ${visible ? 'translate-x-0 ml-2' : '-translate-x-2'}`}>
                        {title}
                    </span>

                </div>

                <span
                    className={`text-green-500 text-sm ml-2 transition-all duration-300 ${checked ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                    ✔
                </span>

            </div>
        </div>
    );
};

export { TaskItem };