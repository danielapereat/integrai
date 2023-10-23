import { Outlet } from "react-router-dom";
import Logo from "../assets/Frame.svg";
import { AiOutlineUser } from 'react-icons/ai';
import { GrNotification } from 'react-icons/gr';
import { GoGear } from 'react-icons/go';

//Components
import NavOption from "./NavOption";

function Layout() {
    return (
        <div className="h-screen">
            <header className="bg-white drop-shadow-md sticky top-0">
                <nav className=" mx-4 flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src={Logo} alt="" />
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                        <a href="#" className="text-sm mx-4 font-semibold leading-6 text-gray-900">Hi, Juan!</a>
                        <GrNotification className="text-sm mx-2"/>
                        <GoGear className="text-sm mx-2"/>
                        <AiOutlineUser className="text-sm mx-2"/>
                    </div>
                </nav>
            </header>
            <div className="flex flex-row h-[calc(100vh-80px)]">
                <Outlet />
            </div>
        </div>

    )
};

export default Layout;