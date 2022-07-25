import Image from 'next/image';
import Link from 'next/link';

export default function SocialIcon({type, size, link}) {
    return (
        <Link className='ml-[5px]' href={link}>
            <a target={'_blank'}>
            <Image src={'/images/svg/' + type + '.svg'} 
                width={size} 
                height={size}
                alt={type}/>
            </a>
        </Link>
    );
};