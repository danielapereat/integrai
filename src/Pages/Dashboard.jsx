import { FiEdit2 } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//Components
import ButtonPrimary from '../Components/buttonPrimary';
import ButtonSecondary from '../Components/ButtonSecondary';
import Cards from '../Components/Cards';
import CreateModal from '../Components/CreateModal';
import SideBar from '../Components/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { generateIntegration, setName, setReduxProviderURL } from '../actions/actions';

function Dashboard({}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const reduxState = useSelector((state) => state)
    const [integrationName, setIntegrationName] = useState("");
    const [providerURL, setProviderURL] = useState("");
    const [openModal, setOpenModal] = useState(true);
    const [openModalSucces, setOpenModalSucces] = useState(false);
    const [title, setTitle] = useState('New');
    const saveIntegration = () => {
        setOpenModal(false);
        handleName(integrationName)
    };
    const navToMethood = () => {
        navigate(`/${title}/methood/new`)
        };
    const handleName = (name) => {
        dispatch(setName(name))
    } 

    const handleGenerate = () => {
        dispatch(generateIntegration())
    }

    const handleProviderURL = () => {
        dispatch(setReduxProviderURL(providerURL))
    }

    useEffect(() => {
    }, [integrationName]);

    useEffect(() => {
        setOpenModal(true);
    }, []);

    return (
        <>
            {id == 'new' &&  openModal ? (
                <CreateModal title={'Create Integration'} setInputValue={setIntegrationName} setOpenModal={setOpenModal} action={saveIntegration}/>
            ): (null)
            }
            {openModalSucces ? (
                <SuccessModal title={'Congratulatuons!'} setOpenModal={setOpenModal} description={'Your integration has been created successfully. You can see your new integration by following this link: Link'}/>
            ): (null)
            }
            <SideBar state={reduxState} />
            <div className="ml-64 px-12 py-4 w-full">
                <div className='flex flex-row items-center'>
                    <h1 className="text-2xl my-4 font-semibold leading-6 text-indigo-700">{reduxState.name}</h1>
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
                        defaultValue={reduxState.providerUrl}
                        onChange={(e)=> setProviderURL(e.target.value)}
                        className='w-full px-4 outline-none'
                        placeholder='Base URL'
                    />
                </div>
                <div className='flex w-full justify-end my-4'>
                    <ButtonPrimary title={'Save'} action={handleProviderURL}/>
                </div>
                <div className='flex w-full justify-between my-8'>
                    <h2 className='text-xl'>Methoods</h2>
                    <ButtonSecondary title={'Create Methood'} icon action={navToMethood}/>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {reduxState.methods.map((e) => <Cards title={reduxState.name} methood={e.name}/>)}
                </div>
                <div className='flex w-full justify-center my-4'>
                    <ButtonPrimary title={'Generate'} action={handleGenerate}/>
                </div>
            </div>
        </>
    )
};

export default Dashboard;