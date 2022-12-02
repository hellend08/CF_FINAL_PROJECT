import React, { useState, useEffect } from 'react';
import Accessories_image from '../../../assets/images/accessories.png'
// import Img_1 from '../../../assets/images/img-data/polo.jpg'
import { BsPinMapFill } from 'react-icons/bs';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaTruck } from 'react-icons/fa';


const Home = () => {

  const [ featuredProducts, setFeaturedProducts ] = useState([])

  useEffect( () => {
    getFeaturedProducts()
  }, []) 

  const getFeaturedProducts = async() => {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json()
    // console.log(data)
    setFeaturedProducts(data);
  }

  const [ leyends ] = useState(
      [
        { title: 'Envíos a nivel nacional', icon: BsPinMapFill, text: 'Envíos por Olva Courier y Shalom según la cobertura, asumiendo el costo por delivery.'},
        { title: 'Diferentes medios de pago', icon: BsFillCreditCardFill, text: 'Paga por transferencia bancaria, yape o plin. Aceptamos pago a contraentrega separando con el 10% del costo de prenda.'},
        { title: 'Entregas inmediatas', icon: FaTruck, text: 'Entregas en estaciones del tren eléctrico y metropolitano. Según disponibilidad.'}
      ])

  return (
    <>
      <figure>
        <img className="mb-5 mt-[2.5rem] w-[1440px] lg:h-[310px] xl:h-[380px] 2xl:h-[460px] object-cover" src={Accessories_image} alt="image_home" />
      </figure>

      <main className="grid grid-cols-3 gap-[2.5rem] py-5 text-[#495551]">
        {
          leyends.map((item, index) => 
          <section key={index} className="text-left">
            <h2 className="uppercase flex items-center "><span className="pr-4">{<item.icon/>}</span>{item.title}</h2>
            <p className="text-sm">{item.text}</p>
          </section>
          )
        }
      </main>

      <section className="flex w-full items-center py-5 text-[#495551] font-medium">
          <hr className="border-t-[1.5px] border-black-200 w-[40%]" />
          <h1 className="text-2xl px-4 min-w-[275px]">Productos Destacados</h1>
          <hr className="border-t-[1.5px] border-black-200 w-[40%]" />
      </section>

      <section className="grid grid-cols-4 gap-x-5 gap-y-[1.5rem] mt-5">
        {
          featuredProducts.map((item) => 
            <figure key={item.id}>
              <img src={item.url} alt="" />
              <figcaption className="py-3 text-sm px-4">
                <h5>{item.title}</h5>
                <p><strong>Tallas:</strong> S - M </p>
                <p><strong>Precio:</strong> S/ {item.albumId}</p>
              </figcaption>
            </figure>
          )
        }
      </section>
    </>
  )
}

export default Home;
