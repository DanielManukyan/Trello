import Header from "../components/Headers/Header";
import SideMenu from '../components/SideMenu/SideMenu';
import { Outlet } from 'react-router-dom';

function Layout() {
    return ( 
        <div className="flex flex-col w-full h-screen">
            <header className="h-12 border-b border-gray-200 shrink-0">
                <Header />
            </header>

            <div className="flex flex-1 overflow-hidden">
                <aside className="w-72 shrink-0">
                    <SideMenu />
                </aside>

                <main className="flex-1 p-10 h-full overflow-hidden">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;