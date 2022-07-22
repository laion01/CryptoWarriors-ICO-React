import Image from 'next/image';

export default function Separator() {
    return(
        <div className='w-full px-[120px] h-[40px]'>
            <Image
                src='/images/shadow-separator-wide-bottom.png'
                alt=''
                width={2044}
                height={41}
            />
        </div>
    );
}