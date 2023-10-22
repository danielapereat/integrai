import ButtonSecondary from "./ButtonSecondary";
import ButtonPrimary from "./buttonPrimary";

function SuccessModal({title, setOpenModal, description}) {
    return (
        <div className="absolute top-0 left-0 h-screen w-screen bg-black/50 flex items-center justify-center">
            <div className="bg-white w-96 px-8 py-4 rounded">
                <h1 className="text-indigo-700 font-semibold mb-4">{title}</h1>
                <p>{description}</p>
                <div className='flex flex-row w-full justify-center my-4'>
                    <ButtonPrimary title={'OK'} action={setOpenModal}/>
                </div>
            </div>
        </div>
    )
};

export default SuccessModal;