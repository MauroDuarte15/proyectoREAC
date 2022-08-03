import './App.css';
import NavBar from './componentes/navBar/navBar';
import ItemListContainer from './componentes/contenedorItemList/contenedorItemList'
import IndividualIntervalsExample from  './componentes/carousel/carousel'
import Footer from './componentes/Footer/footer';
import TituloGrnal from './componentes/tituloGnral/tituloGnral';
import CartWidget from './componentes/CartWidget/CartWidget';


function App() {
  return (
    <div className="App container-fluid flex bg-light">
      <div className='row NavBar'>
          <NavBar/>
          <CartWidget></CartWidget>
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
