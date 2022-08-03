import React from 'react'
import Product from '../productos/productos'

export default function ItemList(props) {
    return (
   <div className='container flex row justify-content-center'>
    {
        props.productos.map((product)=>{
            return(
                <Product key={product.id} precio={product.precio} nombre={product.nombre} categoria={product.categoria} stock={product.stock} imgUrl={product.imagen}  />
            )

        })
    }
   </div> 
  )
}