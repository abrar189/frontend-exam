import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Cardapi from './components/Cardapi';




class AllDataAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorData: [],
    }
  }

  componentDidMount = async () => {

    let result = await axios.get(`${process.env.REACT_APP_SERVER}/apiData`)
    this.setState({
      colorData: result.data
    })
    console.log(this.state.colorData);

  }

  addToFav = async (index) => {
    const dataObj = {
      email: this.props.auth0.user.email,
      title: this.state.colorData[index].title,
      imageUrl: this.state.colorData[index].imageUrl

    }
    await axios.post(`${process.env.REACT_APP_SERVER}/addtofav`,dataObj)
  }

  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <Cardapi colorData={this.state.colorData} addToFav={this.addToFav} />
      </>

    )
  }




}

export default withAuth0(AllDataAPI);
