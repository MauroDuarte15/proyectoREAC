import Contador from '../contador/contador';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product(props) {
    function productoAgregado () {
      return(
        alert('Agregado al carrito!')
      );
    }
  return (
    <Card className=''>
                <div className="ContainerImg">
                </div>
                <div className="DescripcionProducto">
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text className="fw-bold"> ${props.precio} </Card.Text>
                </div>
                <div className='buttonCard Contador'>
                    <Button className='BTN' onClick={productoAgregado}>Comprar</Button>
                    <Contador inicial={1} stock={25}/>
                </div>
        </Card>
  );
}


