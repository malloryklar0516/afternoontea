import { Navbar, Nav, Form, FormControl, Image, Container, Row, Col, Button} from 'react-bootstrap';
import tea from '../assets/redlogo.jpeg';
const Header = () => {
    return (
        <Navbar  expand="lg" className='fs-4 flex-grow-1 px-5' style={{backgroundColor:'lightyellow'}}>
          <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image
              src={tea} style={{width:'60px', height:'auto'}}
            />
            <h1 style={{margin:'10px'}} >Afternoon Tea</h1>
            </Navbar.Brand>
      <Container className='flex-column align-items-end'>
      <Nav style={{margin:'10px'}}>
            <Nav.Link href="/" style={{margin:'20px'}}>Home</Nav.Link>
            <Nav.Link href="/posts" style={{margin:'20px'}}>Posts</Nav.Link>
            <Nav.Link href="/about" style={{margin:'20px'}}>About Us</Nav.Link>
          </Nav>
      </Container>
        
    

        {/* <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form> */}
      </Navbar>
            // <Navbar className='bg-body-teriary' style={{
            //     backgroundColor:"#A3C1D4"
            // }}>
            //     <Container>
                
            //     <Navbar.Brand href="/" style={{color:"white", marginLeft:"10px"}}>Afternoon Tea</Navbar.Brand>
            //     {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end"> */}
            //        <Container className='d-flex'>
            //        <Nav>
            //             <Nav.Link href="/posts" style={{color:"white"}}>
            //               Posts 
            //             </Nav.Link>
            //             <Nav.Link href="/about" style={{color:"white"}}>
            //                 About Us
            //             </Nav.Link>
            //         </Nav>
            //         <Form inline>
            //             <FormControl type="text" placeholder="Search" className="ml-auto"  />
            //         </Form>
            //        </Container>
                    
            //     {/* </Navbar.Collapse> */}
            //     </Container>
            // </Navbar>
        
    )}

    export default Header;