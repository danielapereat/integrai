import { Outlet } from "react-router-dom";
import Logo from "../assets/Frame.svg";
import { AiOutlineUser } from 'react-icons/ai';
import { GrNotification } from 'react-icons/gr';
import { GoGear } from 'react-icons/go';

//Components
import NavOption from "./NavOption";

function SideBar({state}) {
    return (
        <aside className="fixed shadow-md top-20 px-8 py-4 left-0 w-64 h-full">
            <h1 className="text-2xl my-4 font-semibold leading-6 text-indigo-700">Integrations</h1>
            {state.name ? (<NavOption title={state.name} methoods={state.methods}/>) : (null)}
            <NavOption title={"Cielo"}/>
            <NavOption title={"Paymentez"}/>
            <NavOption title={"Bancard"}/>
            <NavOption title={"Safetypay"}/>
        </aside>

    )
};

export default SideBar;