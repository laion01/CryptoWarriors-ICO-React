import Image from 'next/image';
import ChatButton from './ChartButton';
import SocialMedia from './SocialMedia';
export default function Footer() {
    return (
        <div className="w-full bg-[#3234ff] flex flex-col md:flex-row justify-center md:justify-between px-[120px] py-[30px] items-center">
            <div className='flex flex-col'>
                <div className='text-xs pt-2 text-[white] text-[1.2rem]'>
                    @ 2022 Crypto Warriors Academy
                </div>
                
            </div>
            <div className='flex'>
                <SocialMedia link='https://www.facebook.com/Cryptowarriorsacademy/' iconName='facebook'/>
                <SocialMedia link='https://www.youtube.com/channel/UCeHxZN4Y3-w9cxR4kX5ty5Q' iconName='youtube'/>
                <SocialMedia link='https://www.instagram.com/cryptowarriorscommunity/' iconName='instagram'/>
                <SocialMedia link='https://www.linkedin.com/company/crypto-warriors-community/' iconName='linkedin'/>
            </div>
            {/* <div className='flex flex-col justify-end items-center'>
                    <div className='flex space-x-[5px]'>
                <ChatButton imagePath='/images/discord.png' bgColor='#6e52cd' text='Join Discord' />
                <ChatButton imagePath='/images/telegram.png' bgColor='#005dff' text='Join Telegram' />
                </div>
                <div className='text-[12px] pt-[9px] pl-[2px] w-[344px] text-center sm:text-left' style={{color: '#AAAAAA'}}>
                Chat with the community, ask questions, get involved in 
                competitions and more!
                </div>

            </div> */}
        </div>
    )
}