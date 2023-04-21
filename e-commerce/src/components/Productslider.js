import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import img from '../img/61y2VVWcGBLSY450.jpg';
import img1 from '../img/71KQK17ajJLSX679.jpg';
import img2 from '../img/71VWZVUILSX569.jpg';
import img3 from '../img/81CWcXdy0aL._UY550_.jpg'
import img4 from '../img/810s53kR8tL._UY741_.jpg'
import img5 from '../img/1572857757623-jpg-1000x1000.webp'



import "./css/style.css"
function Productslider() {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <CardGroup >
                        <Card style={{ margin: '0px 10px' }} >
                            <Card.Img style={{ maxHeight: "20vh", maxWidth: "20vh", margin: '0 33.33%' }} variant="top" src={img} />
                            <Card.Body>
                                <Card.Title style={{ margin: '0px 33.33%' }}>Watch</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button style={{ width: '100%' }} variant="primary">BUY NOW</Button>
                            </Card.Footer>
                        </Card>
                        <Card style={{ margin: '0px 10px' }}>
                            <Card.Img style={{ maxHeight: "20vh", maxWidth: "20vh", margin: '0 33.33%' }} variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title style={{ margin: '0px 33.33%' }}>Headphone</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button style={{ width: '100%' }} variant="primary">BUY NOW</Button>
                            </Card.Footer>
                        </Card>
                        <Card style={{ margin: '0px 10px' }}>
                            <Card.Img style={{ maxHeight: "20vh", maxWidth: "20vh", margin: '0 33.33%' }} variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title style={{ margin: '0px 33.33%' }}>+</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button style={{ width: '100%' }} variant="primary">BUY NOW</Button>
                            </Card.Footer>
                        </Card>
                    </CardGroup>

                </Carousel.Item>



                <Carousel.Item interval={3000}>
                    <CardGroup >
                        <Card style={{ margin: '0px 10px' }} >
                            <Card.Img style={{ maxHeight: "20vh", maxWidth: "20vh", margin: '0 33.33%' }} variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title style={{ margin: '0px 33.33%' }}>Shirt</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button style={{ width: '100%' }} variant="primary">BUY NOW</Button>
                            </Card.Footer>
                        </Card>
                        <Card style={{ margin: '0px 10px' }}>
                            <Card.Img style={{ maxHeight: "20vh", maxWidth: "20vh", margin: '0 33.33%' }} variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title style={{ margin: '0px 33.33%' }}>Bag</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button style={{ width: '100%' }} variant="primary">BUY NOW</Button>
                            </Card.Footer>
                        </Card>
                        <Card style={{ margin: '0px 10px' }}>
                            <Card.Img style={{ maxHeight: "20vh", maxWidth: "20vh", margin: '0 33.33%' }} variant="top" src={img5} />
                            <Card.Body>
                                <Card.Title style={{ margin: '0px 33.33%' }}>Dress</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button style={{ width: '100%' }} variant="primary">BUY NOW</Button>
                            </Card.Footer>
                        </Card>
                    </CardGroup>

                </Carousel.Item>





            </Carousel>

        </>
    )
}

export default Productslider