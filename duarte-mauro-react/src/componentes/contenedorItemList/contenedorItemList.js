import Product from '../productos/productos';
import '../Cards/cards.css'

function ContenedorItemList() {
    return (
        <div className="ContenedorItemList row d-flex">
             <Product />
             <Product />
             <Product />
        </div>
    )
}
export default ContenedorItemList;