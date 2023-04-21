
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';






function Slider() {
  return (
    <>
      <div className='carousel'>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img style={{ maxHeight: "70vh", maxWidth: "200vh" }}

              className="d-block w-100 h-50"
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Ima One"
            />
            <Carousel.Caption>
              <h3>Shop Till You Drop</h3>
              <p>Buy 1 Get 1 Free </p>
            </Carousel.Caption>
          </Carousel.Item>



          <Carousel.Item interval={1500}>
            <img style={{ maxHeight: "70vh", maxWidth: "500vh" }}

              className="d-block w-100 h-50"
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Imag One"
            />
            <Carousel.Caption>
              <h3>Limited Time Offer</h3>
              <p>Upto 60% off</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img style={{ maxHeight: "70vh", maxWidth: "400vh" }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Imag Two"
            />
            <Carousel.Caption>
              <h3>Sale</h3>
              <p>Flat 50% </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>












    </>

  );
}

export default Slider;