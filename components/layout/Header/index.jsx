import WalletConnector from 'components/WalletConnector';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showWalletConnector, hideWalletConnector } from 'store/slices/utilSlice';
import { useWeb3React } from '@web3-react/core';
import { useUtil} from 'store/hook';
import Navbar from './Navbar';
import SocialMedia from './SocialMedia';


export default function Header() {
    const { account, chainId } = useWeb3React();
    const dispatch = useDispatch();
    const { isWalletConnector } = useUtil();

    return (
        <div className="h-[80px] z-30 fixed bg-[#ffffff] w-full top-0 p-[10px] flex justify-center shadow">
            <div className='w-[1280px] flex justify-between items-center'>
                <div className='h-[61px] pt-[5px]'>
                    <Image 
                        src='/images/logo-white.jpeg' 
                        alt='Crypto Warriors'
                        width={150}
                        height={61}
                    />
                </div>
                <Navbar/>
                
                <div className='flex'>
                    <div className='px-[16px] items-center flex'>
                        <SocialMedia link='https://www.facebook.com/Cryptowarriorsacademy/' iconName='facebook'/>
                        <SocialMedia link='https://www.youtube.com/channel/UCeHxZN4Y3-w9cxR4kX5ty5Q' iconName='youtube'/>
                        <SocialMedia link='https://www.instagram.com/cryptowarriorscommunity/' iconName='instagram'/>
                        <SocialMedia link='https://www.linkedin.com/company/crypto-warriors-community/' iconName='linkedin'/>
                    </div>
                    <button 
                        className='relative bg-[#f2f5f7]  border-2 border-[#afc4d3] hover:border-[#7ea0b8] border-b-[#7ea0b8] rounded-[6px] h-[50px] px-[20px] flex items-center justify-center mr-[10px]'
                            onClick={() => {console.log('dispatch'), dispatch(showWalletConnector())}}
                        >
                        {account ? account.substring(0, 6) + "..." + account.substring(account.length - 4) : 'Connect wallet'}
                        <div className='ml-[10px]'>
                            <Image src='/images/wallet.svg' alt='' width={20} height={20}/>
                        </div>
                        { isWalletConnector &&
                            <WalletConnector/>
                        }
                    </button>
                    {/* <button className='bg-[#3434FF] hover:bg-[#2C23D2] text-[white] rounded-[6px] h-[50px] px-[20px] flex items-center justify-center'
                        onClick={() => {console.log(chainId)}}>
                        Sign Up
                    </button> */}
                </div>
            </div>
            {/* <div className='absolute top-[80px] w-full'>
                <Image src='/images/shadow-separator-wide-bottom.png' width={2044} height={41} alt='' />
            </div> */}
            { isWalletConnector && 
                <div className='fixed w-[100vw] h-[100vh] bg-[transparent] top-0'
                onClick={() => {dispatch(hideWalletConnector())}}
                ></div>
            }
        </div>
    )
}