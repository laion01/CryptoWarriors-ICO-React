import WalletConnector from 'components/WalletConnector';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showWalletConnector, hideWalletConnector } from 'store/slices/utilSlice';
import { useWeb3React } from '@web3-react/core';
import { useUtil} from 'store/hook';
import Navbar from './Navbar';
import SocialMediaRect from './SocialMediaRect';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import { faBars} from '@fortawesome/free-solid-svg-icons'
import Button from './Button';
import SocialMedia from '../Footer/SocialMedia';

export default function Header() {
    const { account, chainId } = useWeb3React();
    const dispatch = useDispatch();
    const { isWalletConnector } = useUtil();
    const [ isDropDown, openDropdown ] = useState(false);

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

                <Navbar className="hidden lg:block"/>
                
                <div className='hidden lg:flex'>
                    <div className='px-[16px] items-center flex justify-center'>
                        <SocialMediaRect link='https://www.facebook.com/Cryptowarriorsacademy/' iconName='facebook'/>
                        <SocialMediaRect link='https://www.youtube.com/channel/UCeHxZN4Y3-w9cxR4kX5ty5Q' iconName='youtube'/>
                        <SocialMediaRect link='https://www.instagram.com/cryptowarriorscommunity/' iconName='instagram'/>
                        <SocialMediaRect link='https://www.linkedin.com/company/crypto-warriors-community/' iconName='linkedin'/>
                    </div>
                    <button 
                        className='relative bg-[#f2f5f7]  border-2 border-[#afc4d3] hover:border-[#7ea0b8] border-b-[#7ea0b8] rounded-[6px] h-[50px] px-[20px] flex items-center justify-center mr-[10px]'
                            onClick={() => {dispatch(showWalletConnector())}}
                        >
                        {account ? account.substring(0, 6) + "..." + account.substring(account.length - 4) : 'Connect wallet'}
                        <div className='ml-[10px]'>
                            <Image src='/images/wallet.svg' alt='' width={20} height={20}/>
                        </div>
                        
                    </button>
                    {/* <button className='bg-[#3434FF] hover:bg-[#2C23D2] text-[white] rounded-[6px] h-[50px] px-[20px] flex items-center justify-center'
                        onClick={() => {console.log(chainId)}}>
                        Sign Up
                    </button> */}
                </div>
                <div className='block lg:hidden'>
                    <div className='w-[40px] h-[40px] flex justify-center items-center'
                    onClick={() => openDropdown(true)}>
                        <FontAwesomeSvgIcon icon={ faBars } className="w-[30px] h-[30px]"/>
                    </div>
                    { isDropDown &&
                        <div className='fixed w-full left-0 z-50'>
                            <div className='flex w-full flex-col p-[20px] bg-[white] shadow'>
                                <Button link='https://www.cryptowarriorscoin.com/index.html' label='Home'></Button>
                                <Button link='https://www.cryptowarriorscoin.com/index.html#team02-d' label='About'></Button>
                                <Button link='https://www.cryptowarriorscoin.com/index.html#features014-0' label='Ecosystem'></Button>
                                <Button link='https://www.cryptowarriorscoin.com/index.html#numbers02-e' label='Economics'></Button>
                                <div className='w-full flex justify-between w-[80%] px -[60%]'>
                                    <SocialMedia link='https://www.facebook.com/Cryptowarriorsacademy/' iconName='facebook'/>
                                    <SocialMedia link='https://www.youtube.com/channel/UCeHxZN4Y3-w9cxR4kX5ty5Q' iconName='youtube'/>
                                    <SocialMedia link='https://www.instagram.com/cryptowarriorscommunity/' iconName='instagram'/>
                                    <SocialMedia link='https://www.linkedin.com/company/crypto-warriors-community/' iconName='linkedin'/>
                                </div>
                                <button 
                                    className='relative bg-[#f2f5f7]  border-2 border-[#afc4d3] hover:border-[#7ea0b8] border-b-[#7ea0b8] rounded-[6px] h-[50px] px-[20px] flex items-center justify-center'
                                        onClick={() => {dispatch(showWalletConnector())}}
                                    >
                                    {account ? account.substring(0, 6) + "..." + account.substring(account.length - 4) : 'Connect wallet'}
                                    <div className='ml-[10px]'>
                                        <Image src='/images/wallet.svg' alt='' width={20} height={20}/>
                                    </div>
                                </button>
                            </div>
                        </div>
                    }
                    {isDropDown &&
                        <div className='fixed left-0 top-0 w-[100%] h-[100%] bg-[#00000090]' onClick={() => openDropdown(false)}> 
                        </div>
                    }
                </div>
            </div>
            {/* <div className='absolute top-[80px] w-full'>
                <Image src='/images/shadow-separator-wide-bottom.png' w
                idth={2044} height={41} alt='' />
            </div> */}
            { isWalletConnector &&
                <WalletConnector/>
            }
            { isWalletConnector && 
                <div className='z-45 fixed w-full h-full bg-[#00000050] top-0'
                onClick={() => {dispatch(hideWalletConnector())}}
                ></div>
            }
            
        </div>
    )
}