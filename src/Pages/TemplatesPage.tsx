import { Search } from "lucide-react";
import TemplatesList from '../components/templates/templatesList';

function TemplatesPage() {
    return ( 
        <div className="flex flex-col gap-8 px-34 md:px-24 sm:px-14">
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
                <TemplatesList />
        </div>
     );
}

export default TemplatesPage;