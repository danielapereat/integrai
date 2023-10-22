import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineFolder } from 'react-icons/ai';

function NavOption() {
    return (        
        <nav>
            <div className="flex flex-row items-center">
                <IoIosArrowForward className="mx-2"/>
                <AiOutlineFolder className="mx-1"/>
                <p>Open Pay</p>
            </div>
        </nav>
    )
};

export default NavOption;