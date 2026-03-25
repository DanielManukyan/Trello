import Header from "../components/Headers/Header";
import SideMenu from '../components/SideMenu/SideMenu';
import {
    Outlet,
} from 'react-router-dom';

function Layout() {

    return ( 
        <div className="flex flex-col">
            <header className="h-12 border-b border-gray-200 w-full">
                <Header />
            </header>

            <div className="flex flex-1">
                <aside className="w-75 text-white">
                    <SideMenu />
                </aside>
                <main className="flex-1 px-6 py-9 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
     );
}

export default Layout;