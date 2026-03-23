import Header from "../components/Headers/Header";
import SideMenu from '../components/SideMenu/SideMenu';

function BoardsPage() {
    return ( 
        <div className="flex flex-col h-screen">
            <div className="flex-1">
                <Header/>
                <SideMenu />
            </div>
        </div>
     );
}

export default BoardsPage;