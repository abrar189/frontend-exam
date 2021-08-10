import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';


export class Cardapi extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={3} className="g-4">
                    {this.props.apidata.map((item, index) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    
                                    <Button variant="primary" onClick={()=>{this.props.addtofav(index)}}>Add to fav</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        )
    }
}

export default Cardapi

