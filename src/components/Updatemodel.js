import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';


export class Updatemodel extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton onClick={this.props.close}>
                        <Modal.Title>Update color</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form onSubmit={this.props.updateCard}>
                            <Form.Group className="mb-3" >

                                <Form.Label>Color title</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.selectData.title} name="Cname" />

                            </Form.Group>

                            <Form.Group className="mb-3" >

                                <Form.Label>Color imageUrl</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.selectData.imageUrl} name="Cimg" />

                            </Form.Group>

                            <Button variant="primary" type="submit" >
                                update
                            </Button>
                        </Form>

                    </Modal.Body>


                </Modal>
            </div>
        )
    }
}

export default Updatemodel
