import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Summary(props) {
  
const handleClose=props.handleClose
const show=props.show
  

    return (
        <>
        
            

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
               
            >


                <Modal.Header closeButton>
                    <Modal.Title> Order list</Modal.Title>
                </Modal.Header>





                <Modal.Body>
                  
               SUMMARY of your of your order
                </Modal.Body>






                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="primary">Proceed</Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Summary