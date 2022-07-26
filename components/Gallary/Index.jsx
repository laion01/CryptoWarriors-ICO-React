import GallaryItem from "./GallaryItem";

export default function Gallary() {
    return (
        <div className="w-full flex flex-wrap justify-center p-[60px]">
            <GallaryItem imagePath='/images/bgs/academy.jpeg' w={1064} h={703} link='https://cryptowarriors.academy' label='CryptoWarriors.Academy'/>
            <GallaryItem imagePath='/images/bgs/agency.png' w={1199} h={800} link='https://cryptowarriors.agency' label='CryptoWarriors.Agency'/>
            <GallaryItem imagePath='/images/bgs/whitepaper.jpeg' w={1199} h={800} link='https://cryptowarriors.agency' label='Whitepaper'/>
        </div>
    );
}