import { FiEdit2 } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Components
import CardHome from '../Components/CardHome';
import CardVideo from '../Components/CardVideo';

function Home({}) {

    return (
        <div className='mx-8 my-4'>
            <div className='mb-8'>
                <h1 className="text-2xl my-4 font-semibold leading-6 text-indigo-700">Quick Actions</h1>
                <div className='grid grid-cols-4 gap-4'>
                        <CardHome title={'My Integrations'}/>
                </div>
            </div>
            <div className='mb-8'>
                <h1 className="text-2xl my-4 font-semibold leading-6 text-indigo-700">Turorials</h1>
                <div className='grid grid-cols-4 gap-4'>
                        <CardVideo title={'How to create an integration'}/>
                        <CardVideo title={'How to create a methood'}/>
                </div>
            </div>
        </div>
    )
};

export default Home;