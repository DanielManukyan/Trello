import { BoardList } from "../components/Boards/BoardList";
import { fetchBoards } from "../shared/api/api";
import { Columns3, User, Settings, BriefcaseBusiness } from "lucide-react"
import { useAppDispatch, useAppSelector } from "../shared/lib/hooks";
import { useEffect } from "react";

function BoardsPage() {
    const dispatch = useAppDispatch();
    const boards = useAppSelector(state => state.boards);

    useEffect(() => {
        dispatch(fetchBoards());
    }, [dispatch]);

    return (
        <div className="">
            <h1 className="text-xl font-bold text-gray-600">Your Workspace</h1>
            <div className="mt-4">
                <div className="flex items-center justify-between rounded-lg w-full">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-green-500 flex items-center justify-center text-white font-bold">
                            T
                        </div>
                        <span className="text-md font-bold text-gray-800">Trello Workspace</span>
                    </div>
                    <div>
                        <ul className="flex items-center gap-2">
                            <li className="flex items-center gap-1 px-2 py-1.5 text-md bg-gray-200 rounded-sm">
                                <div>
                                    <Columns3 size={18}/>
                                </div>
                                <p>Boards</p>
                            </li>
                            <li className="flex items-center gap-1 px-2 py-1.5 text-md bg-gray-200 rounded-sm">
                                <div>
                                    <User size={18}/>
                                </div>
                                <p>Members</p>
                            </li>
                            <li className="flex items-center gap-1 px-2 py-1.5 text-md bg-gray-200 rounded-sm">
                                <div>
                                    <Settings size={18}/>
                                </div>
                                <p>Settings</p>
                            </li>
                            <li className="flex items-center gap-1 px-2 py-1.5 text-md bg-gray-200 rounded-sm">
                                <div>
                                    <BriefcaseBusiness size={18}/>
                                </div>
                                <p>Upgrade</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <BoardList boards={boards} />
        </div>
    );
}

export default BoardsPage;