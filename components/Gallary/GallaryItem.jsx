import Link from 'next/link';
import Image from 'next/image';

export default function GallaryItem({imagePath, w, h, link, label}) {
    return(
        <div className='lg:w-[25vw] md:w-[35vw] sm:w-[75vw] h-auto m-[10px]'>
            <Link href={link} >
                <a target={'_blank'} rel="noreferrer">
                    <Image
                        src={imagePath}
                        alt=''
                        width={w}
                        height={h}/>
                    {label}
                </a>
            </Link>
        </div>
        
    );
}