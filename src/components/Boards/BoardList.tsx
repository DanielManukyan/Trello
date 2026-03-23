import type { IBoard } from "../../types/IBoard"

interface IBoardListProps {
    boards: IBoard[]
}

const BoardList: React.FC<IBoardListProps> = (props) => {
    const { boards } = props
    return (
        <div>
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