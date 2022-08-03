import Card from 'react-bootstrap/Card';
import { MdAddShoppingCart } from "react-icons/md";
import Contador from '../contador/contador';


export default function CardProducto() {
    function productoAgregado () {
      return(
        alert('¡Usted ha agregado su/s producto/s al carrito con exito!')
      );
    }
  return (
    <Card className='gap-4 m-4 '>
      <MdAddShoppingCart  className='agregarProd m-4 '/>
      <Card.Body className='contenedorCard' >
        <Card.Title >TituloProd</Card.Title>
        <Card.Text>
            DescripcionProducto
        </Card.Text>
        <Contador inicial={1} stock={25}/>
        <button onClick={productoAgregado} className='BtnCart'>Agregar al Carrito</button>
      </Card.Body>
    </Card>
  );
}