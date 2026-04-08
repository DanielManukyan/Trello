import TemplateItem from "./TemplateItem";

function TemplatesList() {
    return ( 
        <div className="h-30">
            <h1 className="text-xl font-bold">New and notable templates</h1>
            <div className="h-full">
                <ul className="grid grid-cols-3 h-full">
                    <TemplateItem bgColor="#333" />
                    <TemplateItem bgColor="#555" />
                    <TemplateItem bgColor="#FFD700" />
                </ul>
            </div>
        </div>
     );
}

export default TemplatesList;