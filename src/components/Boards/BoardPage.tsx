import { useParams } from "react-router-dom";
import { useAppSelector } from "../../shared/lib/hooks";

function BoardPage() {
    const { id } = useParams();
    const boards = useAppSelector(state => state.boards)
    const board = boards.find(board => board.id === id);
    return ( 
        <div>
            {board?.title}
        </div>
     );
}

export default BoardPage;