import Us_image from '../../../assets/images/nosotros.jpg';
import Box_image from '../../../assets/images/empaquetado.webp';
import './Us.css'

const Us = () => {

    return (
        <>
            <header className="flex w-full items-center mt-[2.5rem] text-[#495551] font-medium">
                <hr className="border-t-[1.5px] border-black-200 w-[90%]" />
                <h1 className="text-2xl px-4">Nosotros</h1>
                <hr className="border-t-[1.5px] border-black-200 w-[90%]" />
            </header>
            <main className="flex space-x-[2rem] py-[2rem]">
                
                <figure className="w-[55%]">
                    <img src={Us_image} alt="us_image" />
                </figure>
                <article className="w-[50%]">
                    <h1>HISTORY, PURPOSE AND USAGE</h1>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                    The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.</p>
                </article>
            </main>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <figure className="py-5">
                    <img className="w-full h-[650px] object-cover" src={Box_image} alt="box_image" />
                </figure>
            </section>
        </>
    )
}

export default Us;