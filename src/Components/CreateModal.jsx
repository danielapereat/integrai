import ButtonSecondary from "./ButtonSecondary";
import ButtonPrimary from "./buttonPrimary";

function CreateModal({title, action, setOpenModal}) {
    return (
        <div className="absolute top-0 left-0 h-screen w-screen bg-black/50 flex items-center justify-center">
            <div className="bg-white w-96 px-8 py-4 rounded">
                <h1 className="text-indigo-700 font-semibold mb-4">{title}</h1>
                <input 
                        className='w-full px-4 outline-none border rounded'
                        placeholder='Name'
                />
                <div className='flex flex-row w-full justify-end my-4'>
                    <ButtonSecondary title={'Cancel'} action={setOpenModal}/>
                    <ButtonPrimary title={'Save'} action={action}/>
                </div>
            </div>
        </div>
    )
};

export default CreateModal;