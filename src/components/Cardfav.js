import React, { Component } from 'react'
import { Card, Row, Col,Button } from 'react-bootstrap'

export class Cardfav extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={2} className="g-4">
                    {this.props.colorData.map((item, index) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Button variant="primary" onClick={()=>{this.props.deleteCard(index)}}>delete</Button>
                                    <Button variant="primary" onClick={()=>{this.props.showUpdateModal(index)}}>update</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default Cardfav
