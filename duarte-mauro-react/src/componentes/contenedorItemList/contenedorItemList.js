import React from 'react'
import { data } from '../../data/dataProductos';
import { useState, useEffect } from "react";
import ItemList from '../itemList/itemList'

export default function ItemListContainer() {
  const [Cargando, setLoading] = useState(true);
  const [resultado, setResultado] = useState([]);
  
useEffect(() => {
  const productCarrito = new Promise ((res, rej)=>{
    setTimeout(() => {
           res(data)
           rej("¡Error! No se pudieron cargar los productos")
    }, 2000);
  })

   productCarrito
    .then((result)=>{
      setResultado(result)
    })
    .catch(()=> {
    })
    .finally(()=>{
      setLoading(false)
    });

})
console.log(data)
  return (
    <>
      {
        Cargando ? <h4 className='text-dark text-center bg-warning '>Cargando productos...</h4> : <ItemList productos={resultado} />
      }
      
    </>
  )
}