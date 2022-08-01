import './productos.css'
import { Card } from 'reactstrap';

export default function Product() {

    const comprar = () => {
        console.log('estoy comprando');
    }

    return (
        <Card isproduct="true" className='col-sm-3 col-xs-3 CardContenedor '>
            <div className="product-cmp">
                <div className="ContainerImg">
                    <img className="Img" alt='asd' src="http://fpoimg.com/300x250?text=Preview" />
                </div>
                <div className="DescripcionProducto">
                    <h2>Este es el título del producto</h2>
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