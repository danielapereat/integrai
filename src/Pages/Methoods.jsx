import { FiEdit2 } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Components
import ButtonPrimary from '../Components/buttonPrimary';
import ButtonSecondary from '../Components/ButtonSecondary';
import Cards from '../Components/Cards';
import CreateModal from '../Components/CreateModal';
import SideBar from '../Components/SideBar';
import SuccessModal from '../Components/SuccessModal';
import { useDispatch, useSelector } from 'react-redux';
import { addMethod } from '../actions/actions';

function Methoods({}) {
    const { integration, id } = useParams();
    const [method, setMethod] = useState("");
    const [methodName, setMethodName] = useState("");
    const [providerURL, setProviderURL] = useState("");
    const [builderData, setBuilderData] = useState("");
    const [modelsData, setModelsData] = useState("");
    const [openModal, setOpenModal] = useState(true);
    const [openModalSucces, setOpenModalSucces] = useState(false);
    const dispatch = useDispatch();
    const reduxState = useSelector((state) => state);
    const saveIntegration = () => {
        setOpenModal(false);
    };

    const handleAddMethod = () => {
        let builderToFormat = `${builderData}`
        let modelsDataToFormat = `${modelsData}`
        dispatch(addMethod({
            name: methodName,
            builder: builderToFormat.replace(/\n/g, '\\n').replace(/\t/g, '\\t'),
            models:  modelsDataToFormat.replace(/\n/g, '\\n').replace(/\t/g, '\\t'),
        }))
        setOpenModalSucces(true)
    }

    useEffect(() => {
    }, [methodName]);

    useEffect(() => {
    }, [reduxState]);

    useEffect(() => {
        setOpenModal(true);
        setMethod(reduxState?.methods?.find((e)=>e.name == id))
    }, []);

    return (
        <>
            {id == 'new' &&  openModal ? (
                <CreateModal title={'Create Methood'} setInputValue={setMethodName} setOpenModal={setOpenModal} action={saveIntegration}/>
            ): (null)
            }
            {openModalSucces ? (
                <SuccessModal title={'Congratulations!'} setOpenModal={setOpenModalSucces} description={'Your method has been created successfully'}/>
            ): (null)
            }
            <SideBar state={reduxState}/>
            <div className="ml-64 px-12 py-4 w-full overflow-x-auto h-full">
                <div>
                    <div className='flex flex-row items-center'>
                        <h1 className="text-2xl my-4 font-semibold leading-6 text-indigo-700">{method?.name == undefined ? methodName : method?.name}</h1>
                        <button
                            className='outline-none'
                            onClick={() => console.log('click')}
                        >
                            <FiEdit2 className=' mx-2 text-indigo-700'/>
                        </button>
                    </div>
                    <div className='border rounded flex flex-row h-8'>
                        <div className='h-full flex justify-center rounded-l text-white bg-indigo-700 h-full w-8 items-center'>
                            <BiLink />
                        </div>
                        <input 
                            onChange={(e)=> setProviderURL(e.target.value)}
                            className='w-full px-4 outline-none'
                            placeholder='Base URL'
                        />
                    </div>
                    <div className='flex w-full justify-end my-4'>
                        <ButtonPrimary title={'Save'}/>
                    </div>
                    <div className='flex w-full justify-start my-8'>
                        <h2 className='text-xl'>Builder</h2>
                    </div>
                    <textarea defaultValue={method?.builder} className='w-full border rounded h-96' onChange={(e) => setBuilderData(e.target.value)}/>
                    <div className='flex w-full justify-start my-8'>
                        <h2 className='text-xl'>Models</h2>
                    </div>
                    <textarea defaultValue={method?.models} className='w-full border rounded h-96' onChange={(e) => setModelsData(e.target.value)}/>
                    <div className='flex flex-row w-full justify-center my-4'>
                        <ButtonPrimary title={'Create'} action={handleAddMethod}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Methoods;