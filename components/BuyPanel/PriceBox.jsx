import { TokenSymbol } from 'config';
import Image from 'next/image';

export default function PriceBox({price}) {
    return (
        <div className="flex justify-center items-center bg-[lightgray] w-[160px] h-[100px] p-[10px] m-[10px] rounded-[10px]">
            <div className="mr-[10px]">
                <Image src='/Images/coins.svg'
                alt='' width={50} height={50}/>
            </div>
            <div className='flex flex-col justify-start items-center'>
                <p> {'1 ' + TokenSymbol}</p>
                <p> { price + ' USDT'}</p>
            </div>
        </div>
    );
}