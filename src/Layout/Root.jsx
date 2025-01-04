import { Outlet } from "react-router-dom";
import VantaNet from "../Components/VantaNet/VantaNet";
import Navbar from "../Components/Shared/Navbar/Navbar";


const Root = () => {
    return (
        <VantaNet>
            <div>
                <Navbar/>
                <Outlet />
            </div>
        </VantaNet>
    );
};

export default Root;