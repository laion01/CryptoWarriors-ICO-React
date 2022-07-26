import { useState, useEffect } from "react";
import Investors from "./Investors";
import PriceBox from "./PriceBox";
import Timer from "./Timer";
import Image from 'next/image'
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { RPCURL, ContractAddress } from "config";
import { ICO_ABI } from "config/abi";
import { useDispatch } from "react-redux";
import { showWalletConnector, showCryptoPayment, showPaypalPayment } from 'store/slices/utilSlice';
import CryptoPaymetPanel from "components/CryptoPaymentPanel";
import { useUtil } from "store/hook";
import PaypalPaymentPanel from "components/PaypalPaymentPanel";

export default function BuyPanel() {
    
    const initialInvestors = 967;
    const price = 0.02;
    const [currentCap, setCurrentCap] = useState(0);
    const [hardCap, setHardCap] = useState('8,600,000.00');
    const [percentage, setPercentage] = useState(0);
    const [investorsCount, setInvestorsCount] = useState(0);
    const { account } = useWeb3React();
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const { isCryptoPayment, isPaypalPayment} = useUtil();

    useEffect(() => {
        setInterval(() => {
            getStatus();
        }, 1000);
    }, [])

    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    async function getStatus() {
        try {
            const web3 = new Web3(RPCURL)
            const icoContract = new web3.eth.Contract(ICO_ABI, ContractAddress);
            let t = await icoContract.methods.getStatus().call();
            let number1 = Number(Web3.utils.fromWei(t[0]));
            number1 = number1.toFixed(2);
            let number2 = Number(Web3.utils.fromWei(t[1])); // floating point example
            number2 = number2.toFixed(2)
            setHardCap(numberWithCommas(number1));
            setCurrentCap(numberWithCommas(number2));
            setPercentage(t[2]);
            setInvestorsCount(initialInvestors + Number(t[3]));
            setLoaded(true);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center my-[40px] mt-20">
            <h1 className="text-[42px] mb-[20px]">Crypto Warriors ICO Presale</h1>

            <p className='text-[24px] mb-[10px]'> { !loaded ? 'Loading...' : percentage + '%' } </p>
            <div className="w-[80%] bg-[lightgray] h-[12px] rounded-[6px]">
                <div className={ percentage == 0 ? "hidden" : "w-[" + percentage + "%] h-full bg-[blue] rounded-[6px]"} style={{width: `${percentage}%`}}></div>
            </div>
            <div className='w-[80%] flex justify-between px-[30px] mb-[20px]'>
                <p> { currentCap + ' USDT' } </p>
                <p> { hardCap + ' USDT' } </p>
            </div>
            {/* <Timer/> */}
            <div className="mt-[20px] z-20">
                { account &&
                <>
                    <button className='bg-[#3434FF] hover:bg-[#2C23D2] text-[white] text-[24px] border-2 border-[#004c73] hover:border-[001927] border-b-[#001927] rounded-[6px] h-[70px] px-[30px] flex items-center justify-center w-[380px] lg:w-auto min-w-[320px] justify-between mb-[20px]'
                        onClick={() => {dispatch(showCryptoPayment())}}>
                        Buy Now(CSW)
                        <Image className="ml-[10px]" src='/images/usdt.svg' alt='' width={32} height={32}/>
                    </button>
                    {/* <button className='bg-[#f2f5f7] hover:bg-[lightgray] text-[#3434FF] text-[24px] border-2 border-[lightgray] hover:border-[gray] border-b-[gray] rounded-[6px] h-[70px] px-[30px] flex items-center justify-center w-[380px] lg:w-auto min-w-[320px] justify-between'
                        onClick={() => {dispatch(showPaypalPayment())}}>
                        Buy Now (Paypal)
                        <Image className="ml-[10px]" src='/images/paypal.png' alt='' width={32} height={32}/>
                    </button> */}
                </>
                    
                }
                { !account &&
                    <button className='bg-[#3434FF] hover:bg-[#2C23D2] z-10 text-[white] text-[24px] border-2 border-[#004c73] hover:border-[001927] border-b-[#001927] rounded-[6px] h-[70px] px-[30px] flex items-center justify-center w-[380px] lg:w-auto  min-w-[320px] mb-[20px]'
                        onClick={() => {dispatch(showWalletConnector())}}
                        >
                        Connect Wallet
                    </button>
                }
            </div>
            <div className='z-10 w-[80%] flex justify-center lg:justify-between lg:-mt-[110px]'>
                <PriceBox price={ price }/>
                <Investors cnt={ investorsCount }/>
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