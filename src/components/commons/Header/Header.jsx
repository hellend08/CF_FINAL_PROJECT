import React, { useState } from 'react';
import logo from "../../../ohdarling-logo.png"
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";


import './header.css';

const Header = () => {

    const [ itemsNav ] = useState([
        { text: 'Inicio', style: '', route: '/'},
        { text: 'Nosotros', style: '', route: '/nosotros'},
        { text: 'Productos', style: '', route: '/productos'},
        // { text: 'Promociones', style: '', route: '/'},
        { text: 'Contacto', style: '', route: '/contacto'},
    ])

    return (
        <>
            <header className="p-3 bg-[#feedaa] flex items-center justify-around h-[52px]">
                <section className="text-[#495551] flex items-center space-x-3 w-[300px]">
                    <FaShoppingCart/>
                    <Link className="text-sm" to="/login">Login</Link>
                </section>
                <section className="flex flex-row items-center">
                    <input className="text-sm px-1.5 py-1 rounded-sm" type="text" placeholder="Buscar" autoComplete="off" />
                    <button className="px-1.5 text-[#495551]"><FaSearch/></button>
                </section>
                <p className="text-sm text-[#495551] w-[300px] text-right">¿No tienes una cuenta? Registrate <Link to="/registro" className="font-bold">aquí</Link></p>
            </header>
            <figure className="pb-2">
                <img className="flex justify-center w-[300px] h-[210px] mx-auto object-cover" src={logo} alt="logo" />
            </figure>
            <nav className="flex flex-row justify-center">
                {/* border-b-[0.5px] border-[#b6b6b6] */}
                <ul className="flex flex-row justify-center items-center space-x-4 px-2 uppercase text-sm text-[#495551]">
                    {
                        itemsNav.map((item, index) => 
                            <li className='cursor-pointer hover:bg-[#b6e2d340] py-1 px-2 rounded-sm' key={index}>
                                <Link to={item.route}>{item.text}</Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
            
        </>
    )
}

export default Header;