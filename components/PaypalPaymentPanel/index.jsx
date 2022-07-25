import { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";

import { useDispatch } from "react-redux";
import { hidePaypalPayment } from "store/slices/utilSlice";
import { TokenSymbol } from "config";

export default function PaypalPaymentPanel() {
    const dispatch = useDispatch();
    const [usdAmount, setUSDAmount] = useState(1.0);
    return (
        <div className="fixed w-[100vw] h-[100vh] top-0 flex justify-center bg-[#000000bf] z-50"
            onClick={(e) => e.stopPropagation()}>
            <div className="max-w-[550px] h-full my-[30px] bg-[white] z-50 rounded-[15px] border-2 border-[gray]" >
                <div className="h-[60px] w-full flex justify-between items-center p-[20px] rounded-[5,5,0,0] border-b-2 border-b-[gray]">
                    <p className="text-[24px] text-[gray]"> Buy token</p>
                    <button onClick={() => {dispatch(hidePaypalPayment())}} className="text-[24px] text-[darkgray]">
                        X
                    </button>
                </div>
                <div className="h-[150px] w-full flex p-[20px]"> 
                    <div className="w-[50%] p-[10px]">
                        <p className="mb-[10px]">
                            USD Amount
                        </p>
                        <input 
                            className="w-full  h-[40px] border-2 border-[gray] focus:border-[blue] rounded-[5px] p-[5px] px-[15px]" 
                            placeholder="USDT Amount"
                            value={usdAmount}
                            type='number'
                            onChange={(e) => setUSDAmount(e.target.value)}>
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
                            value={usdAmount * 10}>
                        </input>
                    </div>
                </div>
                <div className="w-full overflow-scroll p-[10px] pb-[15px] flex justify-end items-center border-t-[2px] border-[gray] justify-center">
                    <PayPalButton
                        amount={usdAmount}
                        options={{
                            clientId: "AejKQzgkVDrZXqyEzBwdtoBkWgOJAi07i691g2izWUPs5Dv106RGgIMLm4tdu0DbNoDgcjyNnYUgvUmE",
                            currency: "USD",
                        }}
                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                        onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);
                            console.log(details);
                            setUSDAmount(1.0);
                            // OPTIONAL: Call your server to save the transaction
                            return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                orderID: data.orderID
                                })
                            });
                        }}
                    />
                </div>
            </div>
        </div>
    );
}