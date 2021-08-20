import React from 'react';
import { Navbar, Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import clogo from './assets/logo_Cabinet_Urologie2.png'
class NavB extends React.Component {
    render() {
        return <Navbar bg="dark" variant="dark" expand={'sm' | 'md' | 'lg' | 'xl' | 'xxl'}>
            <Container className="justify-content-center">
                <Navbar.Brand bsPrefix="nb" className="w-responsive text-center w-100 mx-auto py-0 px-3 mt-2 d-none d-sm-none d-md-block d-lg-block ">
                    <Container className="justify-content-center">
                        <Row style={{ margin: 'auto' }}>
                            <Col xs={6} sm={5} md={5} lg={5} className="d-flex justify-content-center p-0">
                                <span className="nameFr my-auto" >Dr. QARRO Abdelmounaim</span>
                            </Col>
                            <Col xs={2} sm={2} md={2} lg={2} className="  p-0">
                                <Container className="d-inline px-lg-3 px-md-2 px-sm-1 px-xs-1">
                                    <img width="150px" src={clogo} alt="cabinet logo" />
                                </Container>
                            </Col>
                            <Col xs={6} sm={6} md={5} lg={5} className="d-flex justify-content-center p-0">
                                <span className="nameAr my-auto" >د. قرو عبد المنعم</span>
                            </Col>
                        </Row>
                    </Container>
                </Navbar.Brand>
                <Navbar.Brand bsPrefix="nb" className="w-responsive text-center w-100 mx-auto py-0 px-3 mt-2 d-sm-block d-md-none d-lg-none ">
                    <Container className="justify-content-center">
                        <Row style={{ margin: 'auto' }}>
                            <Col xs={2} sm={2} md={2} lg={2} className="d-flex justify-content-center p-0">
                                <Container className="p-0 my-auto"><Image src={clogo} width="50px" className=" mr-5" /></Container>
                            </Col>
                            <Col xs={8} sm={8} md={2} lg={2} className="p-0">
                                <Row><span className="nameFr my-auto d-block" >Dr. QARRO Abdelmounaim</span></Row>
                                <Row><span className="nameAr my-auto d-block" >د. قرو عبد المنعم</span></Row>
                            </Col>
                            <Col xs={2} sm={2}md={2} lg={2} className="d-flex justify-content-center p-0">
                                <Container className="p-0 my-auto"><Image src={clogo} width="50px" className=" mr-5" /></Container>
                            </Col>
                        </Row>
                    </Container>
                </Navbar.Brand>
            </Container>
            <>
                <style type="text/css">
                    {`
                        .nameFr {
                            font-family: 'Anton', sans-serif;
                            color : white;
                            font-size : 33px;
                        }
                        .nameAr {
                            font-family: 'Jomhuria', cursive;
                            color : white;
                            font-size : 50px;
                        }
                          @media screen and (max-width: 576px) {
                            .nameFr {
                                font-family: 'Anton', sans-serif;
                                color : white;
                                font-size : 23px;
                            }
                            .nameAr {
                                font-family: 'Jomhuria', cursive;
                                color : white;
                                font-size : 40px;
                            }
                          }
                    
                    `}
                </style>
            </>
        </Navbar>
    }
}

export default NavB;