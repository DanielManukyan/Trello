import { useNavigate } from "react-router-dom"
import type { IBoard } from "../../entities/types/IBoard"
import React from "react"

const Board: React.FC<IBoard> = (props) => {
    const { id, title, status, bgColor } = props
    const navigate = useNavigate()
    return (
        <div key={id} className="">
            <button className="w-full h-full" onClick={() => navigate(`/board/${id}`)}>
                <div style={{ backgroundColor: bgColor }} className="w-full h-15 rounded-t-md">
                </div>
                <div className="w-full shadow-sm mx-auto rounded-b-md p-2">
                    <h1>{title}</h1>
                </div>
                <span className="hidden">{status}</span>
            </button>
        </div>
    )
}

export default React.memo(Board);