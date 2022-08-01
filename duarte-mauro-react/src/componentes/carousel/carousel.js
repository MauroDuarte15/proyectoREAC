import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

function IndividualIntervalsExample() {
  return (
    <div className='row justify-content-center carouselContenedor'>
    <Carousel className='col-sm-10 col-xs-10 carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="http://fpoimg.com/300x250?text=Preview"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="http://fpoimg.com/300x250?text=Preview"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://fpoimg.com/300x250?text=Preview"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;