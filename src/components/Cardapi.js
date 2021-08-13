import React, { Component } from 'react'
import { Card, Row, Col,Button } from 'react-bootstrap'

export class Cardapi extends Component {
    render() {
        return (
            <div>
                   <Row xs={1} md={3} className="g-4">
                    {this.props.colorData.map((item, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Button variant="primary" onClick={()=>{this.props.addToFav(idx)}}>ADD TO FAV</Button>
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
