import Video from '../assets/Video.png'

function CardVideo({ title }) {
    return (
        <div className="border rounded p-4">
            <img src={Video}/>
            <p className='font-normal mt-2'>{title}</p>
        </div>
    )
};

export default CardVideo;