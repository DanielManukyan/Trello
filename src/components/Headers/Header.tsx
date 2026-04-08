import { Mic, Bell, CircleQuestionMark, Grip } from "lucide-react";
import Search from './Search';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateBoardModal from "../Boards/CreateBoardModal";

function Header() { 
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)

    const handleLogoClick = () => {
        navigate('/')
    }

    const handleClick = () => {
        setModal(!modal)
    }

    const handelClose = () => {
        setModal(false)
    }

    return ( 
        <div className="h-12 bg-white px-4 flex items-center justify-between">
            <div className="flex items-center gap-4 w-1/4">
                <button>
                    <Grip size={19} />
                </button>

                <button onClick={handleLogoClick}>
                    <img className="w-6 h-6" src="/images/Icons/trello-logo.png" alt="" />
                </button>
            </div>

            <div className='flex items-center gap-2 w-full'>
                <Search />
                <button onClick={handleClick} className='px-2 py-1.25 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
                    Create
                </button>
                {modal && (
                    <CreateBoardModal open={modal} onClose={handelClose} />
                )}
            </div>

            <ul className='flex items-center gap-1'>
                <li className="hover:bg-gray-100 p-2 rounded-full">
                    <Mic size={19}/>
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-full">
                    <Bell size={19}/>
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-full">
                    <CircleQuestionMark size={19}/>
                </li>
                <li>
                    <div className='pt-2 pl-1.5 w-8 h-8 rounded-full bg-amber-600 text-white text-xs'>
                        DM
                    </div>
                </li>
            </ul>
        </div>
     );
}

export default Header;