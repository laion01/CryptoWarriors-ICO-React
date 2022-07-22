import GallaryItem from "./GallaryItem";

export default function Gallary() {
    return (
        <div className="w-full flex flex-wrap justify-center p-[60px]">
            <GallaryItem imagePath='/images/bgs/1.png'/>
            <GallaryItem imagePath='/images/bgs/2.png'/>
            <GallaryItem imagePath='/images/bgs/3.png'/>
            <GallaryItem imagePath='/images/bgs/4.png'/>
            <div className="w-[320px] m-[10px]"></div>
            <div className="w-[320px] m-[10px]"></div>
            <div className="w-[320px] m-[10px]"></div>
            <div className="w-[320px] m-[10px]"></div>
            <div className="w-[320px] m-[10px]"></div>
        </div>
    );
}