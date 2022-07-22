import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideCryptoPayment } from "store/slices/utilSlice";
import { useWeb3React } from "@web3-react/core";
import { ContractAddress, TokenAddress, USDTAddress, TokenName, TokenSymbol, RPCURL} from "config";
import { BEP20_ABI, ICO_ABI } from "config/abi";
import Web3 from "web3";

export default function CryptoPaymetPanel() {
    const dispatch = useDispatch();
    const [usdtAmount, setUSDTAmount] = useState(1.0);
    
    const [ isPending, setPendingStatus] = useState(false);
    const [ allowance, setAllowanceAmount] = useState(0);
    const { account, library } = useWeb3React();

    async function getAllowance(token) {
        const web3 = new Web3(RPCURL)
        const tokenContract = new web3.eth.Contract(BEP20_ABI, token);
        let allowance = await tokenContract.methods.allowance(account, ContractAddress).call();
        allowance = web3.utils.fromWei(allowance);
        setAllowanceAmount(allowance);
    }

    useEffect(() => {
        getAllowance(USDTAddress);
    }, []);    

    const onUsdtUpdate = (e) => {
        try {
            setUSDTAmount(e.target.value);
            getAllowance(USDTAddress);
        } catch(error){

        }
        
    }
    
    async function setAllowance(token, amount) {
        const web3 = new Web3(library.provider);
        try {
          const tokenContract = new web3.eth.Contract(BEP20_ABI, token);
    
          const args = [ContractAddress, web3?.utils.toWei(String(amount))];
          console.log(args);
          const func = "approve";
          console.log(args);
          const {success, gas, message}  = await estimateGas(tokenContract, func, 0, args);
          if(!success) {
              alert(message);
              return;
          }
          const res = await runSmartContract(tokenContract, func, 0, args)
          setAllowanceAmount(amount);
          alert("approve success");
        } catch (e) {
          console.log(e);
        }
        
      }
    
      async function callSmartContract(contract, func, args) {
        if(!contract) return false;
        if(!contract.methods[func]) return false;
        return contract.methods[func](...args).call();
      }
    
      async function runSmartContract(contract, func, value, args) {
        if(!account) return false;
        if(!contract) return false;
        if(!contract.methods[func]) return false;
        return await contract.methods[func](...args).send({ from: account, value: value })
      }
    
      async function estimateGas(contract, func, value, args) {
        try {
            const gasAmount = await contract.methods[func](...args).estimateGas({from: account, value: value});
            return {
                success: true,
                gas: gasAmount
            }
        } catch(e) {
            if(e.message.startsWith("Internal JSON-RPC error.")) {
                e = JSON.parse(e.message.substr(24));
            }
            return {
                success: false,
                gas: -1,
                message: e.message
            }
        }
      }
    
      const approve = async() => {
        if(allowance < usdtAmount) {
          await setAllowance(USDTAddress, usdtAmount);
        }
        console.log(allowance);
      }
    
    const buy = async() => {
        if(web3 == undefined) return ;
        try {
          const icoContract = new web3.eth.Contract(ICO_ABI , ContractAddress);
    
          const args = [web3?.utils.toWei(String(usdtAmount))];
          console.log(args);
          const func = "buy";
          console.log(args);
          const {success, gas, message}  = await estimateGas(icoContract, func, 0, args);
          if(!success) {
              alert(message);
              return;
          }
          const res = await runSmartContract(icoContract, func, 0, args);
          getAllowance(USDTAddress);
          alert("Buy success");
        } catch (e) {
          console.log(e);
        }
    }

    return (
        <div className="fixed w-[100vw] h-[100vh] top-0 flex justify-center bg-[#000000bf] z-50"
            >
            <div className="max-w-[550px] h-[290px] mt-[100px] bg-[white] z-50 rounded-[15px] border-2 border-[gray]" >
                <div className="h-[60px] w-full flex justify-between items-center p-[20px] rounded-[5,5,0,0] border-b-2 border-b-[gray]">
                    <p className="text-[24px] text-[gray]"> Buy token</p>
                    <button onClick={() => {dispatch(hideCryptoPayment())}} className="text-[24px] text-[darkgray]">
                        X
                    </button>
                </div>
                <div className="h-[150px] w-full flex p-[20px]"> 
                    <div className="w-[50%] p-[10px]">
                        <p className="mb-[10px]">
                            USDT Amount
                        </p>
                        <input 
                            className="w-full  h-[40px] border-2 border-[gray] focus:border-[blue] rounded-[5px] p-[5px] px-[15px]" 
                            placeholder="USDT Amount"
                            value={usdtAmount}
                            type='number'
                            onChange={(e) => onUsdtUpdate(e)}>
                        </input>
                    </div>
                    <div className="p-[10px]">
                        <p className="mb-[10px]">
                            {TokenSymbol + ' Amount'}
                        </p>
                        <input 
                            className="disabled:bg-[white] h-[40px] border-2 border-[gray] rounded-[5px]  p-[5px]  px-[15px]"
                            placeholder={TokenSymbol + ' Amount'}
                            disabled={true}
                            value={usdtAmount * 10}>
                        </input>
                    </div>
                </div>
                <div className="w-full h-[80px] p-[10px] pb-[15px] flex justify-end items-center border-t-[2px] border-[gray]">
                    <button className='bg-[#3434FF] hover:bg-[#2C23D2] disabled:bg-[#7c7cff]  text-[white] rounded-[6px] h-[50px] px-[20px] flex items-center justify-center mx-[5px]'
                        onClick={() => { approve() }}
                        disabled={Number(usdtAmount) <= Number(allowance)}>
                        Approve
                    </button>
                    <button className='bg-[#3434FF] hover:bg-[#2C23D2] disabled:bg-[#7c7cff] text-[white] rounded-[6px] h-[50px] px-[20px] flex items-center justify-center mx-[5px]'
                        onClick={() => { buy() }}
                        disabled={Number(allowance) < Number(usdtAmount)}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}