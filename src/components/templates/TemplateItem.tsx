interface TemplateItemProps {
    bgColor: string;
}

function TemplateItem({ bgColor }: TemplateItemProps) {

    const bg = bgColor;
    
    return ( 
        <>
            <li className="w-full h-full">
                <div style={{ backgroundColor: bg }} className="relative w-full h-full">
                    <div className="absolute w-10">
                        <img 
                            className="w-full h-full" 
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