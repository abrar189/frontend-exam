import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import axios from 'axios';
import { Card,Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import Cardfav from './components/Cardfav';
import Updatemodel from './components/Updatemodel';

class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorData: [],
      showmodel: false,
      index:0,
      selectData:{},
    }
  }
  // http://localhost:3005/datafromdb
  componentDidMount = async () => {
    
    let email  = this.props.auth0.user.email;
    let result = await axios.get(`http://localhost:3005/datafromdb?email=${email}`)
    this.setState({
      colorData: result.data
    })
    console.log(this.state.colorData);
  }

  deletCard = async (index)=>{

    let email  = this.props.auth0.user.email;
    let resdelet=await axios.delete(`http://localhost:3005/delete/${index}?email=${email}`);
    this.setState({
      colorData:resdelet.data,
    })
  }



  showUpdate = async (index)=>{
    this.setState({
      showmodel:true,
      index:index,
      selectData:{
        title: this.state.colorData[index].title,
      imageUrl:  this.state.colorData[index].imageUrl,
      }
    })
  }

  close = async ()=>{
    this.setState({
      showmodel:false,
      })
  }

  updateCard = async (e)=>{
    e.preventDefault()

    const dataObj = {
      email: this.props.auth0.user.email,
      title: e.target.Cname.value,
      imageUrl:  e.target.Cimg.value,
    };

    let resdelet=await axios.put(`http://localhost:3005/update/${this.state.index}`,dataObj);
    this.setState({
      colorData:resdelet.data,
      
    })
  }
  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <Cardfav colorData={this.state.colorData} deletCard={this.deletCard} showUpdate={this.showUpdate}/>

        <Updatemodel show={this.state.showmodel} close={this.close} selectData={this.state.selectData} updateCard={this.updateCard}/>
      </>

    )
  }
}

export default withAuth0(MyFavorites);

