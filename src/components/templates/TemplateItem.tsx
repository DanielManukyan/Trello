interface TemplateItemProps {
    bgColor: string;
}

function TemplateItem({ bgColor }: TemplateItemProps) {

    const bg = bgColor;
    
    return ( 
        <>
            <li className="w-full h-full ">
                <div style={{ backgroundColor: bg }} className="relative w-full h-full rounded-sm">
                    <div className="absolute -bottom-4 left-4 p-2 bg-gray-200 border-2 border-white rounded-sm shadow-md">
                        <img 
                            className="w-7 h-7 x-50" 
                            src="/images/Icons/trello-logo.png" 
                            alt="" 
                        />
                </div>
                </div>
            </li>
        </>
     );
}

export default TemplateItem;