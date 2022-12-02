import React, { useState, useEffect } from 'react'

const Products = () => {

  const [ products, setProducts ] = useState([])

  useEffect( () => {
    getProducts();
  })

  const getProducts = async() => {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json();
    setProducts(data);
  }


  return (
    <>
        <header className="flex w-full items-center text-[#495551] font-medium mt-[2.5rem]">
            <hr className="border-t-[1.5px] border-black-200 w-[90%]" />
            <h1 className="text-2xl px-4">Productos</h1>
            <hr className="border-t-[1.5px] border-black-200 w-[90%]" />
        </header>
        <main className="grid grid-cols-4 gap-4 mt-[2.5rem]">
          {
            products.map((item) => 
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
        </main>
    </>
  )
}

export default Products;
