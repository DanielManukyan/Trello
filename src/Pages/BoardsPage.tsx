import { BoardList } from "../components/Boards/BoardList";
import { useAppSelector } from "../shared/lib/hooks";

function BoardsPage() {
    const boards = useAppSelector(state => state.boards)
    // const dispatch = useDispatch()

    return ( 
        <div>
            <h1 className="text-xl font-bold text-gray-600">Your Workspace</h1>
            <div>
                <BoardList boards={boards}/>
            </div>
        </div>
    );
}

export default BoardsPage;