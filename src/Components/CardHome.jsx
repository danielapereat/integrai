import { MdCable } from 'react-icons/md'
import { AiOutlineFolder } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

function CardHome({ title }) {
    const navigate = useNavigate();
    return (
        <div className="border rounded p-4">
            <div className="flex flex-row items-center">
                <MdCable className='mr-4'/>
                <h2 className='text-lg font-semibold'>{title}</h2>
            </div>
            <p className='text-base font-light mb-4'>Description of the section</p>
            <button onClick={() => navigate('integrations/new')} className='text-indigo-700 flex flex-row items-center mb-4'>
                <AiOutlinePlus className='mr-2'/>
                Create New
            </button>
            <h2 className='font-semibold'>Recently created</h2>
            <div className="flex flex-row items-center">
                <AiOutlineFolder className="mx-1"/>
                <p>Open Pay</p>
            </div>
        </div>
    )
};

export default CardHome;