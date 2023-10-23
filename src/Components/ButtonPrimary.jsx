function ButtonPrimary({title, action, isModal}) {
    return (
    <>
    {isModal ? (
    <button onClick={() =>action(false)} className='bg-indigo-700 px-4 ml-4 rounded text-white'>{title}</button>
    ):(
    <button onClick={() =>action()} className='bg-indigo-700 px-4 ml-4 rounded text-white'>{title}</button>
    )}
    </>
    
    )
    };
    
    export default ButtonPrimary;