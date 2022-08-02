import {useState} from 'react'

function Contador () {
    // const handlers = useState(0);
    const [contador, setContador] = useState(0);

    function agregarAlContador () {
        setContador(contador + 1);
    }
    
    return (
        <div>
            <p>
                {contador}
            </p>
            <br/>
            <button onClick={agregarAlContador} > Agregar 1+ </button>
        </div>
    )
}
export default Contador;