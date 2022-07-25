import Image from 'next/image';
import ChatButton from './ChartButton';
import SocialIcon from 'components/SocialIcon';

export default function Footer() {
    return (
        <div className="w-full bg-[#141414] flex flex-col md:flex-row justify-between px-[120px] py-[30px]">
            <div className='flex flex-col'>
                <div className='text-xs pt-2 text-[white] mb-[20px]'>
                    @ 2022 CryptoWarriors. All rights reserved. &nbsp;
                    Privacy Policy | Terms &amp; Conditons
                </div>
                <div className='flex'>
                    <SocialIcon type='facebook' size={32} link='https://www.facebook.com/Cryptowarriorsacademy/'/>
                    <SocialIcon type='twitter' size={32} link='https://twitter.com/'/>
                    <SocialIcon type='instagram' size={32} link='https://www.instagram.com/cryptowarriorscommunity/'/>
                    <SocialIcon type='linkedin' size={32} link='https://www.linkedin.com/company/crypto-warriors-community/'/>
                </div>
            </div>
            <div className='flex flex-col justify-end items-center'>
                    <div className='flex space-x-[5px]'>
                <ChatButton imagePath='/images/discord.png' bgColor='#6e52cd' text='Join Discord' />
                <ChatButton imagePath='/images/telegram.png' bgColor='#005dff' text='Join Telegram' />
                </div>
                <div className='text-[12px] pt-[9px] pl-[2px] w-[344px] text-center sm:text-left' style={{color: '#AAAAAA'}}>
                Chat with the community, ask questions, get involved in 
                competitions and more!
                </div>

            </div>
        </div>
    )
}