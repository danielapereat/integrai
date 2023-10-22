import { AiTwotoneApi } from 'react-icons/ai'

function Cards() {
    return (
        <div className="border rounded p-4">
            <div className="flex flex-row items-center">
                <AiTwotoneApi className='mr-4'/>
                <h2 className='font-semibold'>Purchase</h2>
            </div>
            <p className='font-light'>Description of the methood</p>
            <button className='text-indigo-700'>Ver Mas</button>
        </div>
    )
};

export default Cards;