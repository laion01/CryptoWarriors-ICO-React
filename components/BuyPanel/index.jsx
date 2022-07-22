import Investors from "./Investors";
import PriceBox from "./PriceBox";
import Timer from "./timer";
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";
import { showWalletConnector, showCryptoPayment } from 'store/slices/utilSlice';
import CryptoPaymetPanel from "components/CryptoPaymentPanel";
import { useUtil } from "store/hook";

export default function BuyPanel() {
    const { account } = useWeb3React();
    const dispatch = useDispatch();
    const { isCryptoPayment} = useUtil();

    return (
        <div className="flex flex-col justify-center items-center my-[40px]">
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
                    <button className='bg-[#3434FF] hover:bg-[#2C23D2] text-[white] text-[24px] border-2 border-[#004c73] hover:border-[001927] border-b-[#001927] rounded-[6px] h-[70px] px-[30px] flex items-center justify-center w-[380px] lg:w-auto'
                        onClick={() => {dispatch(showCryptoPayment())}}>
                        Buy Token
                    </button>
                }
                { !account &&
                    <button className='bg-[#3434FF] hover:bg-[#2C23D2] text-[white] text-[24px] border-2 border-[#004c73] hover:border-[001927] border-b-[#001927] rounded-[6px] h-[70px] px-[30px] flex items-center justify-center w-[380px] lg:w-auto'
                        onClick={() => {dispatch(showWalletConnector())}}
                        >
                        Connect Wallet
                    </button>
                }
            </div>
            { isCryptoPayment && 
                <CryptoPaymetPanel/>
            }
            
        </div>
    )
}