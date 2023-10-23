import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { AiTwotoneApi } from 'react-icons/ai'
import { AiOutlineFolder } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function NavOption({title, methoods}) {
    const navigate = useNavigate();
    const [openInfo, setOpenInfo] = useState(false);
    useEffect(() => {
    }, [methoods, openInfo]);

    return (        
        <nav>
            <div className="flex flex-row items-center">
                <button onClick={() => setOpenInfo(true)}>
                    {openInfo ? (<IoIosArrowDown className="mx-2"/>):(<IoIosArrowForward className="mx-2"/>)}
                    
                </button>
                <button
                    onClick={() => navigate(`/integrations/${title}`)}
                    className='flex flex-row items-center'
                >
                    <AiOutlineFolder className="mx-1"/>
                    <p>{title}</p>
                </button>
            </div>
            {openInfo ? (
                <>
                    {methoods?.map((e) => {
                        <button
                            onClick={() => navigate(`/${title}/methood/${e.name}`)}
                            className='flex flex-row items-center'
                        >
                            <AiTwotoneApi className="mx-1"/>
                            <p>{e.name}</p>
                        </button>
                    })}
                </>
            ) : (null)}
            
        </nav>
    )
};

export default NavOption;