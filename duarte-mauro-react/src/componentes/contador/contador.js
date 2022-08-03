import{ useState} from 'react'



export default function Contador (props) {
    const [Contador,setCounter] = useState(props.initial);
    
    function agregarContador ( ){
        if (Contador >= props.stock){
                alert(`El stock maximo es ${props.stock}`);
        } else {
            setCounter ( Contador + 1);
        }

    }

    function reducirContador () {
        if (Contador <= 1) {
            alert("¡Usted no ha seleccionado ningun producto!")
        } else {
            setCounter (Contador - 1)
        }
    }

    return (
        <div className='container d-flex  justify-content-center col-6 '>
            <div className='container d-flex align-items-center col-12 text-center fw-bolder m-2'>
                <button className='col-4 btnAdd' onClick={agregarContador}>+</button>
                <span className='col-6  text-dark fs-4'> {Contador}</span>
                <button className='col-4 btnRedd' onClick={reducirContador}  >-</button>    
            </div>
        </div>
    )
}