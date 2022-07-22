import Image from 'next/image';

export default function WalletButton ({label, icon, handleConnect}) {
    return(
        <div className='w-full bg-[#f2f5f7]  border-2 border-[#afc4d3] hover:border-[#7ea0b8] border-b-[#7ea0b8] rounded-[6px] h-[50px] px-[20px] flex items-center justify-between mr-[10px] mb-[10px]'
            onClick={() => handleConnect(label)}>
            <p>{label}</p>
            <div className='ml-[10px]'>
                <Image src={icon} alt='' width={20} height={20}/>
            </div>
        </div>
    );
}