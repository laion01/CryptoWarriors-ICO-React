import Image from "next/image";

export default function LogoImage() {
    return (
        <div className='flex justify-center relative flex flex-col justify-center items-center mt-[30px]'>
            <h1 className="text-[42px] mb-[20px]">Crypto Warriors ICO Presale</h1>
            <div className='max-w-[800px] flex flex-col mx-[120px] z-10'>
                <div className='h-[40px] bg-[blue] flex items-center rounded-t-[8px]'>
                    <div className='w-[16px] h-[16px] bg-[white] mx-[2px] ml-[10px] rounded-[8px]'></div>
                    <div className='w-[16px] h-[16px] bg-[white] mx-[2px] rounded-[8px]'></div>
                    <div className='w-[16px] h-[16px] bg-[white] mx-[2px] rounded-[8px]'></div>
                </div>
                <div className='border border-[#afc4d3] max-h-[60vh] overflow-hidden '>
                    <Image
                        src='/images/showcase.jpg'
                        alt=''
                        width={1334}
                        height={1311}
                    />
                </div>
            </div>
            <div className='absolute bottom-[80px] translate-y-full'>
                <Image
                    src='/images/shadow-separator-wide-top.png'
                    alt='' width={2044} height={41}
                />
            </div>
            
            <div className='absolute bottom-0 translate-y-full px-[5%]'>
                <Image
                    src='/images/shadow-separator-wide-bottom.png'
                    alt='' width={2044} height={41}
                />
            </div>
        </div>
    )
}