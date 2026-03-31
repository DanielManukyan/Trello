import type { IBoard } from "../../entities/types/IBoard"
import { Board } from "./Board"
import CreateBoardCard from './CreateBoardCard';

interface IBoardListProps {
    boards: IBoard[]
}

const BoardList: React.FC<IBoardListProps> = (props) => {
    const { boards } = props
    if (!boards.length) {
        return (
            <div className="w-full text-center text-gray-400 mt-8">Нет досок</div>
        );
    }
    return (
        <div className="grid grid-cols-4 w-full gap-3 mt-4">
            {boards.map((board) => (
                <Board key={board.id} id={board.id} status={board.status} bgColor={board.bgColor} title={board.title}/>
            ))}
            <CreateBoardCard />
        </div>
    );
}

export { BoardList }