import { Search } from "lucide-react";

function TemplatesPage() {
    return ( 
        <div>
            <div className="flex items-center justify-between w-full">
                <h1 className="text-xl font-bold">Featured categories</h1>
                <div className="flex items-center gap-2 w-auto relative">
                    <input className="border border-gray-300 rounded-sm py-1.5 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Find template"/>
                    <Search size={18} className="absolute right-2 ml-2"/>
                </div>
            </div>
            <div>
                    <ul className="grid grid-cols-7 gap-4 mt-6 text-xs">
                        <li className="flex flex-col items-center gap-1 text-center">
                            <img className="w-full rounded-md hover:shadow-lg duration-300" src="/images/1.png" alt="" />
                            <p>
                                Business
                            </p>                  
                        </li>
                        <li className="flex flex-col items-center gap-1 text-center">
                            <img className="w-full rounded-md hover:shadow-lg duration-300" src="/images/2.png" alt="" />
                            <p>
                                Design
                            </p>                  
                        </li>
                        <li className="flex flex-col items-center gap-1 text-center">
                            <img className="w-full rounded-md hover:shadow-lg duration-300" src="/images/3.png" alt="" />
                            <p>
                                Education
                            </p>                  
                        </li>
                        <li className="flex flex-col items-center gap-1 text-center">
                            <img className="w-full rounded-md hover:shadow-lg duration-300" src="/images/4.png" alt="" />
                            <p>
                                Engenering
                            </p>                  
                        </li>
                        <li className="flex flex-col items-center gap-1 text-center">
                            <img className="w-full rounded-md hover:shadow-lg duration-300" src="/images/5.png" alt="" />
                            <p>
                                Marketing
                            </p>                  
                        </li>
                        <li className="flex flex-col items-center gap-1 text-center">
                            <img className="w-full rounded-md hover:shadow-lg duration-300" src="/images/6.png" alt="" />
                            <p>
                                Project Management
                            </p>                  
                        </li>
                        <li className="flex flex-col items-center gap-1 text-center">
                            <img className="w-full rounded-md hover:shadow-lg duration-300" src="/images/7.png" alt="" />
                            <p>
                                Remote Work
                            </p>                  
                        </li>
                    </ul>
                </div>
        </div>
     );
}

export default TemplatesPage;