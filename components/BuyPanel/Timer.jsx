import { useState, useEffect } from "react";
import TimerElement from "./TimerElement";
import Web3 from 'web3';
import { RPCURL, ContractAddress } from "config";
import { ICO_ABI } from "config/abi";

export default function Timer() {
    const [endTime, setEndTime] = useState(1658636017);
    const [days, setDays] = useState(12);
    const [hours, setHours] = useState(12);
    const [mins, setMins] = useState(12);
    const [secs, setSecs] = useState(12);

    useEffect(() => {
        getReleaseTime();

        setInterval(() => {
          let t = new Date().getTime();
          t = (t - (t % 1000)) / 1000;
          let delay = endTime - t;
          const s = delay % 60;
          delay = (delay - s) / 60;
          const m = delay % 60;
          delay = (delay - m) / 60;
          const h = delay % 24;
          const d = (delay - h) / 24;
          setSecs(s);
          setMins(m);
          setHours(h);
          setDays(d);
        }, 1000);
    }, []);

    async function getReleaseTime() {
        const web3 = new Web3(RPCURL)
        const icoContract = new web3.eth.Contract(ICO_ABI, ContractAddress);
        let t = await icoContract.methods.releaseTime().call();
        setEndTime(t);
    }

    return (
        <div className="flex justify-center">
            <TimerElement value={days} label='Days'/>
            <TimerElement value={hours} label='Hours'/>
            <TimerElement value={mins} label='Mins'/>
            <TimerElement value={secs} label='Secs'/>
        </div>
    );
}