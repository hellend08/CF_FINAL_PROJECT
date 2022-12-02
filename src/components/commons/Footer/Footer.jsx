import { SiFacebook } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <footer className="mt-auto p-4 bg-[#616d6914] h-[48px]">
                <ul className="flex flex-row justify-end items-center space-x-3 text-[#495551] px-4">
                    <li><SiFacebook/></li>
                    <li><BsInstagram/></li>
                    <li><BsWhatsapp/></li>
                </ul>
            </footer>
            
        </>
    )
}

export default Footer;