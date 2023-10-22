import { AiOutlinePlus } from 'react-icons/ai';

function ButtonSecondary({ title, icon, action }) {
    return (
        <button 
            onClick={() => action(false)}
            className='border border-indigo-700 px-4 ml-4 rounded text-indigo-700 flex flex-row items-center'>
            {icon ? (<AiOutlinePlus className='mr-4'/>) : (null) }
            {title}
        </button>
    )
};

export default ButtonSecondary;