import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function SocialMedia({link, iconName}) {

    const getIcon = function (name) {
        switch(name) {
            case 'facebook':
                return faFacebookF;
            case 'youtube':
                return faYoutube;
            case 'instagram':
                return faInstagram;
            case 'linkedin':
                return faLinkedinIn;
        }
    }

    return (
        <Link href={link}>  
            <a target="_blank" 
                className="m-[8px] bg-[#353535] hover:bg-[white] w-[40px] h-[40px] flex justify-center items-center rounded-[6px]"> 
                <FontAwesomeIcon icon={getIcon(iconName)} size='xl' inverse className="hover:text-[black] p-[5px]"/> 
            </a>
        </Link>
    )
}