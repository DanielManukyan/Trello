import type { IBoard } from "../../entities/types/IBoard"

const Board: React.FC<IBoard> = (props) => {
    const { id, title, status, bgColor } = props
    return (
        <div key={id} className="">
            <div style={{ backgroundColor: bgColor }} className="w-full h-15 rounded-t-md">
            </div>
            <div className="w-full shadow-sm mx-auto rounded-b-md p-2">
                <h1>{title}</h1>
            </div>
            <span className="hidden">{status}</span>
        </div>
    )
}

export { Board }