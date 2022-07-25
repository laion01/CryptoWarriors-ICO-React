import Investors from "./Investors";
import PriceBox from "./PriceBox";
import Timer from "./Timer";
import Image from 'next/image'
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";
import { showWalletConnector, showCryptoPayment, showPaypalPayment } from 'store/slices/utilSlice';
import CryptoPaymetPanel from "components/CryptoPaymentPanel";
import { useUtil } from "store/hook";
import PaypalPaymentPanel from "components/PaypalPaymentPanel";

export default function BuyPanel() {
    const { account } = useWeb3React();
    const dispatch = useDispatch();
    const { isCryptoPayment, isPaypalPayment} = useUtil();

    return (
        <div className="flex flex-col justify-center items-center my-[40px] mt-20">
            <h1 className="text-[42px] mb-[20px]">Crypto Warriors ICO Presale</h1>

            <p className='text-[24px] mb-[10px]'> 40% </p>
            <div className="w-[80%] bg-[lightgray] h-[12px] rounded-[6px]">
                <div className="w-[40%] h-full bg-[blue] rounded-[6px]"></div>
            </div>
            <div className='w-[80%] flex justify-between px-[30px] mb-[20px]'>
                <p>0 USDT </p>
                <p>15 000 000 USDT</p>
            </div>
            <Timer/>
            <div className='w-[80%] flex justify-center lg:justify-between lg:-mt-[110px]'>
                <PriceBox/>
                <Investors/>
            </div>
            <div className="mt-[20px]">
                { account &&
                <>
                    <button className='bg-[#3434FF] hover:bg-[#2C23D2] text-[white] text-[24px] border-2 border-[#004c73] hover:border-[001927] border-b-[#001927] rounded-[6px] h-[70px] px-[30px] flex items-center justify-center w-[380px] lg:w-auto min-w-[320px] justify-between mb-[20px]'
                        onClick={() => {dispatch(showCryptoPayment())}}>
                        Buy Now (Crypto)
                        <Image className="ml-[10px]" src='/images/usdt.svg' alt='' width={32} height={32}/>
                    </button>
                    <button className='bg-[#f2f5f7] hover:bg-[lightgray] text-[#3434FF] text-[24px] border-2 border-[lightgray] hover:border-[gray] border-b-[gray] rounded-[6px] h-[70px] px-[30px] flex items-center justify-center w-[380px] lg:w-auto min-w-[320px] justify-between'
                        onClick={() => {dispatch(showPaypalPayment())}}>
                        Buy Now (Paypal)
                        <Image className="ml-[10px]" src='/images/paypal.png' alt='' width={32} height={32}/>
                    </button>
                </>
                    
                }
                { !account &&
                    <button className='bg-[#3434FF] hover:bg-[#2C23D2] text-[white] text-[24px] border-2 border-[#004c73] hover:border-[001927] border-b-[#001927] rounded-[6px] h-[70px] px-[30px] flex items-center justify-center w-[380px] lg:w-auto  min-w-[320px] '
                        onClick={() => {dispatch(showWalletConnector())}}
                        >
                        Connect Wallet
                    </button>
                }
            </div>
            { isCryptoPayment && 
                <CryptoPaymetPanel/>
            }
            { isPaypalPayment &&
                <PaypalPaymentPanel/>
            }
        </div>
    )
}