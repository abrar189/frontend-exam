import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import axios from 'axios';
import { Card,Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorData: [],
      index:0,
    }
  }
  // http://localhost:3005/datafromdb
  componentDidMount = async () => {
    
    let { email } = this.props.auth0.user
    let result = await axios.get(`http://localhost:3005/datafromdb?email=${email}`)
    this.setState({
      colorData: result.data
    })
    console.log(this.state.colorData);
  }

  deletCard = async (index)=>{
    let paramObj ={
      email:this.props.auth0.user.email
    }
    let resdelet=await axios.delete(`http://localhost:3005/delete/${index}`,{params:paramObj});
    this.setState({
      colorData:resdelet.data,
      index:index
    })
  }
  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        {this.state.colorData.map((item, index) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.imageUrl} alt="" />
              <Card.Body>
                <Card.Text>
                 {item.title}
                </Card.Text>
                {/* <Button variant="primary" onClick={()=>{this.addtofav(item)}}>Add to fav</Button> */}
              </Card.Body>
            </Card>
          )
        })}
      </>

    )
  }
}

export default withAuth0(MyFavorites);

