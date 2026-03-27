import type { IColumn } from "../../entities/types/IColumn"
import { TaskList } from "../Tasks/TaskList"

const Column: React.FC<IColumn> = (props) => {
    const { id, title, tasks} = props
    return (
        <div key={id}>
            <h2>{title}</h2>
            <div>
                task
                <TaskList tasks={tasks} />
            </div>
        </div>
    )
}

export { Column }