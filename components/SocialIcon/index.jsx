import Image from 'next/image';

export default function SocialIcon({type, size}) {
    return (
        <button className='ml-[5px]'>
            <Image src={'/images/svg/' + type + '.svg'} 
                width={size} 
                height={size}
                alt={type}/>
        </button>
    );
};