import Image from 'next/image';

export default function Investors({cnt}) {
    return (
        <div className="flex justify-center items-center bg-[lightgray] w-[160px] h-[100px] p-[10px] m-[10px] rounded-[10px]">
            <div className="mr-[10px]">
                <Image src='/Images/investors.svg'
                alt='' width={50} height={50}/>
            </div>
            <div className='flex flex-col justify-start items-center'>
                <p> Investors</p>
                <p> {cnt}</p>
            </div>
        </div>
    );
}