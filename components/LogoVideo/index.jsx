import Image from 'next/image';

export default function LogoVideo() {
    return (
        <div className='flex justify-center relative flex flex-col justify-center items-center md:mt-[30px] sm:mt-[0px]'>
            <div className='max-w-[800px] flex flex-col md:mx-[60px] lg:mx-[120px] sm:mx-[20px] z-10'>
                <div className='lg:h-[40px] md:h-[32px] bg-[blue] flex items-center rounded-t-[8px]'>
                    <div className='lg:w-[16px] lg:h-[16px] md:w-[12px] md:h-[12px] bg-[white] mx-[2px] ml-[10px] rounded-[8px]'></div>
                    <div className='lg:w-[16px] lg:h-[16px] md:w-[12px] md:h-[12px] bg-[white] mx-[2px] rounded-[8px]'></div>
                    <div className='lg:w-[16px] lg:h-[16px] md:w-[12px] md:h-[12px] bg-[white] mx-[2px] rounded-[8px]'></div>
                </div>
                <div className='border border-[#afc4d3]'>
                    <video controls autoPlay={true}>
                        <source src="https://cdn2.mywave.video/embed/62d6f71d02f36739ffb8a865/62d6f7290778844ddb343cd3.mp4" size="1080"/>
                        <source src="https://cdn2.mywave.video/embed/62d6f71d02f36739ffb8a865/62d6f7290778844ddb343cd2.mp4" size="720"/>
                        <source src="https://cdn2.mywave.video/embed/62d6f71d02f36739ffb8a865/62d6f7290778844ddb343cd1.mp4" size="360"/>
                    </video>
                </div>
            </div>
            <div className='absolute bottom-[80px] translate-y-full md:block hidden'>
                <Image
                    src='/images/shadow-separator-wide-top.png'
                    alt='' width={2044} height={41}
                />
            </div>
            <div className='absolute bottom-0 translate-y-full px-[5%]  md:block hidden'>
                <Image
                    src='/images/shadow-separator-wide-bottom.png'
                    alt='' width={2044} height={41}
                />
            </div>
        </div>
    )
}