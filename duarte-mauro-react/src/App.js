import './App.css';
import NavBar from './componentes/navBar/navBar';
import ItemListContainer from './componentes/contenedorItemList/contenedorItemList'
import IndividualIntervalsExample from  './componentes/carousel/carousel'
import Footer from './componentes/Footer/footer';
import TituloGrnal from './componentes/tituloGnral/tituloGnral';


function App() {
  return (
    <div className="App container-fluid flex bg-light">
      <div className='NavBar'>
          <NavBar/>
      </div>
      <div className='Carousel'>
          <TituloGrnal titulo={'Carousel tittle'}></TituloGrnal>
          <IndividualIntervalsExample />
      </div>
      <div className='Main'>
          <TituloGrnal titulo={'TituloCards'}></TituloGrnal>
          <ItemListContainer></ItemListContainer>
      </div>    
      <div className='Footer'>
          <Footer></Footer>
      </div>
      
    </div>
  
  );
}

export default App;
