import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineFolder } from 'react-icons/ai';

function NavOption({title, methoods}) {
    return (        
        <nav>
            <div className="flex flex-row items-center">
                <IoIosArrowForward className="mx-2"/>
                <AiOutlineFolder className="mx-1"/>
                <p>{title}</p>
            </div>
        </nav>
    )
};

export default NavOption;