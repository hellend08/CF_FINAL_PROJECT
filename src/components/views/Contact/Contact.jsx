import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { AiTwotonePhone } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useForm } from "react-hook-form";
import './Contact.css'

const Contact = () => {

    const {register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    };

    const [ contactElemnets ] = useState([
        { text: 'ohdarling@soporte.com', icon: MdEmail },
        { text: '+51 986071815', icon: AiTwotonePhone },
        { text: '+51 986071815', icon: IoLogoWhatsapp },
    ])

    return (
        <>
            <main className="flex flex-col justify-center items-center pb-5 mt-[2.5rem] ">
                <section className="flex w-full items-center text-[#495551] font-medium">
                    <hr className="border-t-[1.5px] border-black-200 w-[90%]" />
                    <h1 className="text-2xl px-4">Contáctanos</h1>
                    <hr className="border-t-[1.5px] border-black-200 w-[90%]" />
                </section>
                
                
            </main>
            <section className="flex my-[2rem] bg-[#b6e2d340] rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="py-[2.5rem] pl-[3rem] w-[50%] space-y-6 form-input" >
                    <input  name="nombre" {...register('nombre')} type="text" placeholder="Nombres" autoComplete="off" />
                    <input name="email" {...register('email')} type="email" placeholder="Correo electrónico" autoComplete="off" />
                    <textarea name="mensaje" {...register('mensaje')} type="text" placeholder="Mensaje" autoComplete="off" />
                    <button type="submit" className="w-[200px] h-[40px] rounded-lg text-sm text-[#495551] bg-[#b6e2d3]">Enviar</button>
                </form>
                <ul className="border-l-[1.5px] border-[#b6e2d3] my-[2.5rem] px-[4rem] space-y-3">
                    {
                        contactElemnets.map((item, index) => 
                            <li key={index} className="flex items-center text-[#495551]"> <span className=" pr-4">{<item.icon/>}</span>{item.text}</li>
                            
                        )
                    }
                </ul>

            </section>
            
        </>
    )
}

export default Contact;