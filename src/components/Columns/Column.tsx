import type { IColumn } from "../../types/IColumn"
import { TaskList } from "../Tasks/TaskList"

const Column: React.FC<IColumn> = (props) => {
    const { id, title, tasks } = props
    return (
        <div key={id}>
            <h2>{title}</h2>
            <div>
                <TaskList tasks={tasks} />
            </div>
        </div>
    )
}

export { Column }