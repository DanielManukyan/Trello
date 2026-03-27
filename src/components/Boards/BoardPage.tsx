import { useParams } from "react-router-dom";
import { useAppSelector } from "../../shared/lib/hooks";
import { ColumnList } from "../Columns/ColumnList";
import type { IColumn } from "../../entities/types/IColumn";

function BoardPage() {
    const { id } = useParams();

    const columns: IColumn[] = useAppSelector(state => state.columns);

    const boardColumns = columns.filter(
        column => column.boardId === id
    );

    return (
        <div>
            <ColumnList columns={boardColumns} />
        </div>
    );
}

export default BoardPage;