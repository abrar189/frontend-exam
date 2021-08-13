import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Cardfav from './components/Cardfav';
import UpdateModel from './components/UpdateModel';


class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorData: [],
      index: 0,
      showModal: false,
      selectData:{}

    }
  }
  // http://localhost:3006/DBdata?email=
  componentDidMount = async () => {
    let email = this.props.auth0.user.email;
    let result = await axios.get(`${process.env.REACT_APP_SERVER}/DBdata?email=${email}`)
    this.setState({
      colorData: result.data
    })
    console.log(this.state.colorData);

  }
  deleteCard = async (index) => {
    let email = this.props.auth0.user.email;
    let result = await axios.delete(`${process.env.REACT_APP_SERVER}/deletecolor/${index}?email=${email}`);
    this.setState({
      colorData: result.data
    })

  }
  updateCard = async (e) => {
    e.preventDefault()
    const objData = {
      email: this.props.auth0.user.email,
      title: e.target.title.value,
      imageUrl: e.target.imageUrl.value,

    }
    let result = await axios.put(`${process.env.REACT_APP_SERVER}/update/${this.state.index}`, objData)
    this.setState({
      colorData: result.data,
    })
  }
  handleClose = async () => {
    this.setState({
      showModal: false

    })
  }
  showUpdateModal = async (index) => {
    this.setState({
      showModal: true,
      index: index,
      selectData: {
        title: this.state.colorData[index].title,
        imageUrl: this.state.colorData[index].imageUrl

      }
    })
  }

  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <Cardfav colorData={this.state.colorData} deleteCard={this.deleteCard} showUpdateModal={this.showUpdateModal} />
        <UpdateModel handleClose={this.handleClose} show={this.state.showModal} selectData={this.state.selectData} updateCard={this.updateCard}/>
      </>

    )
  }
}

export default withAuth0(MyFavorites);

