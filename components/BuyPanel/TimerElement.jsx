export default function TimerElement({value, label}) {
    return (
        <div className="flex flex-col justify-center items-center w-[80px] h-[80px] bg-[#00b2ff] m-[10px] font-bold rounded-[5px]">
            <p className="text-[24px] font-bold">{value}</p>
            <p className="text-[14px] font-bold">{label}</p>
        </div>
    );
}