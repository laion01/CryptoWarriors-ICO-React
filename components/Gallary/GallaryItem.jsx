import Image from 'next/image';

export default function GallaryItem({imagePath}) {
    return(
        <div className='w-[320px] h-[240px] m-[10px]'>
            <Image
                src={imagePath}
                alt=''
                width={320}
                height={240}/>
        </div>
    );
}