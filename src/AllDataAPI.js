import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Cardapi from './components/Cardapi';



class AllDataAPI extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataColor: [],
    }
  }

  // https://ltuc-asac-api.herokuapp.com/allColorData

  componentDidMount = async () => {
    let result = await axios.get(`http://localhost:3005/allColorData`)
    this.setState({
      dataColor: result.data,
    })
  }


  addtofav = async (index) => {

    const dataObj = {
      email: this.props.auth0.user.email,
      title: this.state.dataColor[index].title,
      imageUrl:  this.state.dataColor[index].imageUrl,
    };

    await axios.post('http://localhost:3005/addtofav', dataObj)
    
  }


  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <Cardapi apidata={this.state.dataColor} addtofav={this.addtofav} />
      </>

    )
  }

    
  

}

export default withAuth0(AllDataAPI);
