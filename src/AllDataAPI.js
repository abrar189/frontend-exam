import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card,Button } from 'react-bootstrap';


class AllDataAPI extends Component {

constructor(props){
    super(props);
    this.state={
        dataColor:[],
    }
}

// https://ltuc-asac-api.herokuapp.com/allColorData

    componentDidMount = async ()=>{
        let result= await axios.get(`http://localhost:3005/allColorData`)
        this.setState({
            dataColor:result.data,
        })
    }
    addtofav =async(item)=>{
        const dataObj={
          email:this.props.auth0.user.email,
          title:item.title,
          imageUrl:item.imageUrl
        };
        await axios.post('http://localhost:3005/addtofav',dataObj)
      }
    render() {
        return (
            <>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
            {this.state.dataColor.map((item, index) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.imageUrl} alt="" />
              <Card.Body>
                <Card.Text>
                 {item.title}
                </Card.Text>
                <Button variant="primary" onClick={()=>{this.addtofav(item)}}>Add to fav</Button>
              </Card.Body>
            </Card>
            )
        })}
            </> 
        )
       
        }
}

export default withAuth0(AllDataAPI);
