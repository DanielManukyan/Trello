import type { IBoard } from "../../entities/types/IBoard"

const Board: React.FC<IBoard> = (props) => {
    const { id, title, status } = props
    return (
        <div key={id}>
            <h1>{title}</h1>
            <p>Status: {status}</p>
        </div>
    )
}

export { Board }