import './tituloGrnal.css'

function TituloGrnal(prop) {
    return (
        <div className="row TituloGrnalContenedor">
            <h1 className="TituloGrnal col-sm-12 col-xs-12 col-md-12">{prop.titulo}</h1>
        </div>
    )
}
export default TituloGrnal