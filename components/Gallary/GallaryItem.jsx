import Link from 'next/link';
import Image from 'next/image';

export default function GallaryItem({imagePath, w, h, link, label}) {
    return(
        <div className='lg:w-[25vw] md:w-[35vw] sm:w-[75vw] h-auto m-[10px]'>
            <Link href={link} >
                <a target={'_blank'} rel="noreferrer" className='flex flex-col justify-center items-center'>
                    <Image
                        src={imagePath}
                        alt=''
                        width={w}
                        height={h}/>
                    <p className='mt-[10px] text-[18px]'>{label}</p>
                </a>
            </Link>
        </div>
        
    );
}