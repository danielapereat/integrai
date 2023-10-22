import { AiTwotoneApi } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

function Cards({ title, methood }) {
    const navigate = useNavigate();
    return (
        <div className="border rounded p-4">
            <div className="flex flex-row items-center">
                <AiTwotoneApi className='mr-4'/>
                <h2 className='font-semibold'>Purchase</h2>
            </div>
            <p className='font-light'>Description of the methood</p>
            <button onClick={() => navigate(`/${title}/methood/${methood}`)} className='text-indigo-700'>Ver Mas</button>
        </div>
    )
};

export default Cards;