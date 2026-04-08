import { useState } from "react";
import CreateBoardModal from "./CreateBoardModal";

function CreateBoardCard() {
    const [open, setOpen] = useState(false);

    const handleAdd = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    return ( 
        <div className="relative">
            <div className="w-full text-center shadow-sm mx-auto h-25 rounded-md p-2">
                <button onClick={handleAdd} className="w-full h-full cursor-pointer">
                    <h1>Create new Board</h1>
                </button>
            </div>

            <CreateBoardModal onClose={handleClose} open={open} />
        </div>
    );
}

export default CreateBoardCard;