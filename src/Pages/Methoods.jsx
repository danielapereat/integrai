import { FiEdit2 } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Components
import ButtonPrimary from '../Components/buttonPrimary';
import ButtonSecondary from '../Components/ButtonSecondary';
import Cards from '../Components/Cards';
import CreateModal from '../Components/CreateModal';

function Methoods({}) {
    const { integration, id } = useParams();
    const [openModal, setOpenModal] = useState(true);
    const [title, setTitle] = useState('New');
    const saveIntegration = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        setOpenModal(true);
    }, []);

    return (
        <>
            {id == 'new' &&  openModal ? (
                <CreateModal title={'Create Methood'} setOpenModal={setOpenModal} action={saveIntegration}/>
            ): (null)
            }
            <div className="ml-64 px-12 py-4 w-full">
                <div className='flex flex-row items-center'>
                    <h1 className="text-2xl my-4 font-semibold leading-6 text-indigo-700">{title}</h1>
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
                <textarea className='w-full border rounded h-96'/>
                <div className='flex flex-row w-full justify-end my-4'>
                    <ButtonSecondary title={'Cancel'} action={'hola'}/>
                    <ButtonPrimary title={'Save'} action={'hola'}/>
                </div>
                <div className='flex w-full justify-start my-8'>
                    <h2 className='text-xl'>Models</h2>
                </div>
                <textarea className='w-full border rounded h-96'/>
                <div className='flex flex-row w-full justify-end my-4'>
                    <ButtonSecondary title={'Cancel'} action={'hola'}/>
                    <ButtonPrimary title={'Save'} action={'hola'}/>
                </div>
            </div>
        </>
    )
};

export default Methoods;