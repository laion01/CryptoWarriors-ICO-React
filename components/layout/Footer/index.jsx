import Image from 'next/image';
import ChatButton from './ChartButton';

export default function Footer() {
    return (
        <div className="w-full bg-[#4f4f4f] flex flex-col md:flex-row justify-between px-[120px] py-[30px]">
            <div className='text-xs pt-2 sm:pl-[92px] text-[white] mb-[20px]'>
                @ 2022 CryptoWarriors. All rights reserved. &nbsp;
                Privacy Policy | Terms &amp; Conditons
            </div>
            <div className='flex flex-col justify-end items-center'>
                    <div className='flex space-x-[5px]'>
                <ChatButton imagePath='/images/discord.png' bgColor='#9076E9' text='Join Discord' />
                <ChatButton imagePath='/images/telegram.png' bgColor='#478AFF' text='Join Telegram' />
                </div>
                <div className='text-[12px] pt-[9px] pl-[2px] w-[344px] text-center sm:text-left' style={{color: '#AAAAAA'}}>
                Chat with the community, ask questions, get involved in 
                competitions and more!
                </div>

            </div>
        </div>
    )
}