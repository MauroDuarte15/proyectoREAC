import './productos.css'
import { Card } from 'reactstrap';

export default function Product() {

    const comprar = () => {
        console.log('estoy comprando');
    }

    return (
        <Card className='col-sm-3 col-xs-3' isProduct={true}>
            <div className="product-cmp">
                <div className="">
                    <img className='Img' alt='asd' src="http://fpoimg.com/300x250?text=Preview" />
                </div>
                <div className="DescripcionProducto">
                    <h3>Este es el título del producto</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum ac est id malesuada. Nunc vestibulum enim est, sed sagittis sapien interdum ege
                    </p>
                </div>
                <div className='buttonCard'>
                    <button className='BTN' onClick={comprar}>Comprar</button>
                </div>
            </div>
        </Card>
    );
} 