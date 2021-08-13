import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export class UpdateModel extends Component {
    render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>update color</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateCard}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.selectData.title} name="title" />
                                
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.selectData.imageUrl} name="imageUrl" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit">
                               update
                            </Button>
                        </Form>
                    </Modal.Body>
                   
                </Modal>
            </div>
        )
    }
}

export default UpdateModel
