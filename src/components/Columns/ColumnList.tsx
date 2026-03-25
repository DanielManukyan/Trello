import type { IColumn } from "../../entities/types/IColumn"
import { Column } from "./Column";

interface IColumnListProps {
    columns: IColumn[]
}

const ColumnList: React.FC<IColumnListProps> = (props) => {
    const { columns } = props;
    return (
        <div className="flex flex-row gap-4">
            {columns.map((column) => (
                <Column key={column.id} title={column.title} id={column.id} boardId={column.boardId} tasks={column.tasks} />
            ))}
        </div>
    )
}
export { ColumnList }