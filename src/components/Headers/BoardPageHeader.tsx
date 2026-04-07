import { ChevronDown, Kanban, Plug, Zap, Menu, Star, Users, UserPlus, Ellipsis } from 'lucide-react'

interface BoardPageHeaderProps {
    boardName: string;
}

function BoardPageHeader({ boardName }: BoardPageHeaderProps) {
    return ( 
        <div className='h-14 bg-white flex items-center justify-between w-full px-6 border-y border-gray-200 shrink-0'>
            <div className='flex items-center gap-3'>
                <h1 className='font-bold'>{boardName}</h1>
                <div className='flex items-center gap-1'>
                    <Kanban size={16}/>
                    <ChevronDown size={16}/>
                </div>
            </div>

            <ul className='flex items-center gap-4'>
                <li>
                    <div className='pt-2 pl-1.5 w-8 h-8 rounded-full bg-amber-600 text-white text-xs'>
                        DM
                    </div>
                </li>
                <li><Plug size={18}/></li>
                <li><Zap size={18}/></li>
                <li><Menu size={18}/></li>
                <li><Star size={18}/></li>
                <li><Users size={18}/></li>
                <li>
                    <div className='flex items-center gap-1.5 px-2 py-1 bg-gray-500 text-white rounded-sm'>
                        <UserPlus size={18}/>
                        <p>Share</p>
                    </div>
                </li>
                <li><Ellipsis size={18}/></li>
            </ul>
        </div>
     );
}

export default BoardPageHeader;