import { SiFacebook } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <footer className="mt-auto text-[#495551] p-4 bg-[#616d6914] h-[48px] flex justify-evenly items-center">
                <p className="text-sm">© All CopyRights Reserved 2022</p>
                <ul className="flex flex-row justify-end items-center space-x-3 text-[#495551] px-4">
                    <li>
                        <a href='/'><SiFacebook/></a>
                    </li>
                    <li>
                        <a href='/'><BsInstagram/></a>
                    </li>
                    <li>
                        <a href='/'><BsWhatsapp/></a>
                    </li>
                </ul>
            </footer>
            
        </>
    )
}

export default Footer;