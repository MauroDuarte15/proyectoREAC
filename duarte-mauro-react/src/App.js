import './App.css';
import NavBar from './componentes/navBar/navBar';
import ContenedorItemList from './componentes/contenedorItemList/contenedorItemList';
import IndividualIntervalsExample from  './componentes/carousel/carousel'
import Footer from './componentes/Footer/footer';
import TituloGrnal from './componentes/tituloGnral/tituloGnral';

function App() {
  return (
    <div className="App container-fluid">
      <NavBar/>
      <TituloGrnal titulo={'Carousel tittle'}></TituloGrnal>
      <IndividualIntervalsExample />
      <TituloGrnal titulo={'TituloCards'}></TituloGrnal>
      <ContenedorItemList/>
      <Footer></Footer>
    </div>
  );
}

export default App;
