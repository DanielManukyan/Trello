import type { IBoard } from "../../entities/types/IBoard"

interface IBoardListProps {
    boards: IBoard[]
}

const BoardList: React.FC<IBoardListProps> = (props) => {
    const { boards } = props
    return (
        <div className="flex items-center gap-4">
            {boards.map((board) => (
                <div key={board.id}>
                    <h1>{board.title}</h1>
                    <p>Status: {board.status}</p>
                </div>
            ))}
        </div>
    )
}

export { BoardList }