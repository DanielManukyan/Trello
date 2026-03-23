import type { IColumn } from "../../types/IColumn"
import { Column } from "./Column";

interface IColumnListProps {
    columns: IColumn[]
}

const ColumnList: React.FC<IColumnListProps> = (props) => {
    const { columns } = props;
    return (
        <div className="flex flex-row gap-4">
            {columns.map((column) => (
                <Column key={column.id} title={column.title} id={""} boardId={""} tasks={[]} />
            ))}
        </div>
    )
}
export { ColumnList }