import GallaryItem from "./GallaryItem";

export default function Gallary() {
    return (
        <div className="w-full flex flex-wrap justify-center p-[60px]">
            <GallaryItem imagePath='/images/bgs/academy.jpeg' w={1064} h={703} link='https://cryptowarriors.academy' label=''/>
            <GallaryItem imagePath='/images/bgs/agency.jpeg' w={1199} h={800} link='https://cryptowarriors.agency' label=''/>
            <GallaryItem imagePath='/images/bgs/agency.jpeg' w={1199} h={800} link='https://cryptowarriors.agency' label=''/>
        </div>
    );
}