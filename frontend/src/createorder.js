import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './createorder.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Createorder = () => {
    return (

        <>

            <div className='createorder-main'>
                <Navbar bg="light" variant="light">

                    <Container className='createorder-container'>
                        <h3 className='createorder-logo'>LAUNDARY</h3>
                        <Nav className="nav">

                            <Nav.Link href="/pricing" className='navchild'>Pricing</Nav.Link>
                            <Nav.Link href="/career" className='navchild'>Career</Nav.Link>

                        </Nav>

                    </Container>

                </Navbar>



                <div className='sidebar'>


                </div>

             
                    <Nav id='createbutton'>

                        <Nav.Link href='/selectorder' >Create</Nav.Link>

                    </Nav>

               
              






            </div>



        </>



    )
}
export default Createorder
