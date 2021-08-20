import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './NavB.js'
import Parcours from './Parcours.js'
import im from './assets/resnet50.png'
import vd from './assets/advideo.mp4'
import p from './assets/carousel/first.jpeg'
import p1 from './assets/carousel/second.jpeg'
import p2 from './assets/carousel/third.jpeg'
import p3 from './assets/carousel/fourth.jpeg'
import p4 from './assets/carousel/fifth.jpeg'
import p5 from './assets/carousel/sixth.jpeg'
import p6 from './assets/carousel/seventh.jpeg'
import p7 from './assets/carousel/eighth.jpeg'
import p8 from './assets/carousel/ninth.jpeg'
import p9 from './assets/carousel/tenth.jpeg'
import uf from './assets/urologie_femme.jpg'
import uh from './assets/urologie_homme.jpg'
import doc from './assets/doc_portrait.png'
import hours_icon from './assets/hours_icon.png'
import phone from './assets/phone.png'
import location from './assets/location.png'
import email from './assets/email.png'
import fb from './assets/fb.png'
import efbhlogoblanc from './assets/efbhlogo-blanc.png'
import { Table, Carousel, Col, Container, Row, Image, Navbar } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <NavB />
      {/*
      #212529
      <Row>
        <Col>
        <div width="100%" className="embed-responsive embed-responsive-16by9">
         <iframe width="100%" height="500" className="embed-responsive-item" title="ad video" src={vd} allowfullscreen></iframe>
      </div>
        </Col>
      </Row>
      <div width="100%" className="embed-responsive embed-responsive-16by9">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/aBzQ75wAj78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      */}
      <Container fluid className="p-0 p-sm-0 p-md-0 p-lg-0 m-0 m-sm-0 m-md-0 m-lg-0">
        <Row style={{ margin: 'auto' }}>
          <Col sm={1} md={1} lg={1}>
          </Col>
          <Col xs={12} sm={10} md={10} lg={10} style={{ backgroundColor: '#f6f2f0' }}>
            <Container className="p-0">
              <Container fluid className="my-5">
                <Row style={{ margin: 'auto' }} className="align-items-center pb-5">
                  <Col xs={6} sm={6} md={6} lg={6} className="align-left  p-0">
                    <h1 className="d-inline">Cabinet d'urologie et de chirurgie urologique</h1>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} className="align-right  p-0">
                    <h1 className="d-inline">مكتب جراحة المسالك البولية  <br />و التناسلية</h1>
                  </Col>
                </Row>
                <Row className="align-items-center mx-5">
                  <Col xs={0} sm={0} md={1} lg={1} className="align-top  p-0"></Col>
                  <Col xs={0} sm={0} md={2} lg={2} className="align-top  p-0">
                    <Image
                      className="w-100"
                      src={uf}
                      alt="Dr. QARRO"
                      roundedCircle
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} className="align-top  p-0">
                    <p className="mx-0">Rein - Vessie - Prostate - Circoncision - Chirurgie endoscopique - Lithotripsie - Infertilité et Dysfonction éréctile chez l'homme</p>
                    <hr className="w-50 mx-auto" />
                    <p className="mx-0">الكلى - المثانة - البروستات - الختانة - الجراحة بالمنظار - تفتيت الحصى بون جراحة - العقم و الضعف الجنسي عند الرجل</p>
                  </Col>
                  <Col xs={0} sm={0} md={2} lg={2} className="align-top  p-0">
                    <Image
                      className="w-100"
                      src={uh}
                      alt="Dr. QARRO"
                      roundedCircle
                    />
                  </Col>
                  <Col xs={0} sm={0} md={1} lg={1} className="align-top  p-0"></Col>
                </Row>
                <Container className="mt-5 p-xs-0">
                  <Row className="align-items-center">
                    <Col className="d-xs-block d-sm-block d-md-none p-0">
                      <Container className="p-0"><Image src={hours_icon} width="16px" height="16px" className=" mr-5" /></Container>
                    </Col>
                    <Col className="p-0">
                      <Container className="p-0"><Container className="d-none d-md-inline mr-1"><Image src={hours_icon} className="horimg mr-5" /></Container><h5 className="hor d-md-inline ml-5" >Horaires d'ouverture</h5></Container>
                    </Col>
                    <Col className="p-0">
                      <Container className="p-0"><h5 className="hor d-md-inline mr-5"  >ساعات العمل</h5><Container className="d-none d-md-inline ml-1"><Image src={hours_icon} className="horimg mr-5" /></Container></Container>
                    </Col>
                    <Col className="d-xs-block d-sm-block d-md-none p-0">
                      <Container className="p-0"><Image src={hours_icon} width="16px" height="16px" className=" mr-5" /></Container>
                    </Col>
                    <>
                      <style type="text/css">
                        {`
                        @media screen and (max-width: 576px) {
                          .hor {
                            font-size: 15px;
                          }
                          .horimg {
                            width : 16px;
                            padding : 0;
                          }
                        }
                        @media screen and (max-width: 768px) {
                          .hor {
                            font-size: 15px;
                          }
                          .horimg {
                            width : 16px;
                            padding : 0;
                          }
                        }
                         `}
                      </style>
                    </>
                  </Row>
                  <Row>
                    <Col className="p-0">
                      <br />
                      <br />
                      <Table className="w-100">
                        <tbody>
                          <tr>
                            <td><span >Lundi au vendredi</span></td>
                            <td><span >09:00-12:00 14:00-17:00</span></td>
                            <td><span >من الإثنين إلى الجمعة</span></td>
                          </tr>
                          <tr>
                            <td><span >Samedi</span></td>
                            <td><span >09:00-12:00</span></td>
                            <td><span >السبت</span></td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>

                  </Row>
                </Container>
              </Container>
              <Container fluid className="my-5">
                <video width="100%" className="video-container video-container-overlay" autoPlay controls>
                  <source src={vd} />
                </video>
              </Container>
              <Container fluid className="my-5">
                <Carousel indicators="true" nextLabel='' prevLabel=''>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={p}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={p1}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={p2}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={p3}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={p4}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={p5}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={p6}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={p7}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={p8}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={p9}
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Container>
              <Container fluid className="my-5">
                <Row style={{ margin: 'auto' }} className="align-items-center ">
                  <Col xs={12} sm={12} md={3} lg={3} className="align-top  p-0">
                    <Row className="align-items-center m-0">
                      <Col xs={3} sm={3} md={0} lg={0} className="align-top  p-0">
                      </Col>
                      <Col xs={6} sm={6} md={12} lg={12} className="align-top  p-0">
                        <img
                          className=" w-100"
                          src={doc}
                          alt="Dr. QARRO"
                        />
                      </Col>
                      <Col xs={3} sm={3} md={0} lg={0} className="align-top  p-0">
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} sm={12} md={9} lg={9} className="my-auto p-0">
                    <Row className="align-items-center ">
                      <Col xs={6} sm={6} md={6} lg={6} className="my-auto p-0">
                        <p className="mt-3" style={{ fontSize: '20px', fontFamily: "'Roboto', sans-serif" }}>Dr. Qarro Abdelmounaim</p>
                        <p className="mb-0">Ex Medecin Lt Colonel à l'Hopital Militaire Universitaire Mohammed V - Rabat</p>
                        <p className="mt-0">Diplomé  de la Faculté de Médecine de Rabat,Maroc et Dijon,France</p>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} className="my-auto p-0">
                        <p style={{ fontSize: '30px', fontFamily: "'Jomhuria', cursive" }}>د. قرو عبد المنعم</p>
                        <p className="mb-0">طبيب ل.كولونيل سابق بالمستشفى العسكري الجامعي محمد الخامس - الرباط</p>
                        <p className="mt-0">خريج كلية الطب بالرباط ,المغرب و ديجون, فرنسا</p>
                      </Col>
                    </Row>
                    <Parcours />
                  </Col>
                </Row>
              </Container>
              <Container fluid className="my-5">
                <Row style={{ margin: 'auto' }} className=" align-items-stretch align-items-center ">
                  <Col xs={12} sm={12} md={6} lg={6} className=" p-0" >
                    <Container fluid className="d-flex align-items-center h-50">
                      <Container fluid className="p-0 my-auto">
                        <Image
                          src={location}
                          alt="Dr. QARRO"
                          roundedCircle
                        />
                        <br />
                        <p className="my-auto">N° 24 Etage 3 Résidence Almorjane, Angle Avenue Mohammed V et rue Moulay Abdellah - Kenitra</p>
                      </Container>
                    </Container>
                    <Container fluid className="d-flex align-items-center h-50 ">
                      <Container fluid className="p-0 my-auto">
                        <Image
                          src={location}
                          alt="Dr. QARRO"
                          roundedCircle
                        />
                        <br />
                        <p className="my-auto">رقم 24 الطابق 3 إقامة المرجان تقاطع شارع محمد الخامس و زقة مولاي عبد الله - القنيطرة</p>
                      </Container>
                    </Container>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} className=" p-0">
                    <Container fluid className=" p-0">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6595.542168248747!2d-6.670621374606208!3d34.254384422205604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7595eafd4c92f%3A0x199923ba50b5f459!2sPharmcie%20Maaoui!5e0!3m2!1sfr!2sma!4v1626889780272!5m2!1sfr!2sma"
                        width="100%" height="455" style={{ border: 0 }} title="map" allowFullScreen="" loading="lazy"></iframe>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
          <Col sm={1} md={1} lg={1}>
          </Col>
        </Row>
      </Container>
      <Navbar bg="dark" variant="dark" className="d-flex flex-column p-0" >
        <Container fluid className="d-flex flex-column p-0">
          <Row className="w-100 justify-content-center my-3">
            <Col xs={12} sm={12} md={3} lg={3} className="justify-content-center p-0">
              <Container className="d-inline pr-1">
                <Image
                  src={phone}
                  alt="Dr. QARRO"
                  width="20px"
                />
              </Container>
              <span className="foot">05 37 37 44 10</span>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} className="justify-content-center p-0">
              <Container className="d-inline pr-1">
                <Image
                  src={email}
                  alt="Dr. QARRO"
                  width="20px"
                />
              </Container>
              <span className="foot">abdelmounaimqarro73@gmail.com</span>
              <>
                <style type="text/css">
                  {`
                        .foot {
                            color : white;
                            font-weight : 700;
                            font-size : 17px;
                        }
                        .cpr {
                          color : white;
                      }
                       
                    
                    `}
                </style>
              </>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} className="justify-content-center p-0">
              <Container className="d-inline pr-1">
                <Image
                  src={fb}
                  alt="Dr. QARRO"
                  width="25px"
                />
              </Container>
              <span className="foot">Dr Qarro Abdelmounaim</span>
            </Col>
          </Row>
          <small><span className="cpr">&copy; Copyright 2021, E.F.B.H</span></small>
          <Image
            src={efbhlogoblanc}
            alt="EFBH"
            width="70px"
          />
          <br />
        </Container>

      </Navbar>

    </div>
  );
}

export default App;
