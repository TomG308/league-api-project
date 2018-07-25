import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux';

import ChampionData from './ChampionData'

class Profile extends Component {
  constructor(props){
    super();
    this.state = {
      summID: ""
    }
    //Bind here
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // componentDidMount(){
  //   this.props.getData
  // }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.getData(this.state.summID)
  }
//103
  render() {
    console.log(this.props)
    const mappedUserData = this.props.data.map((item, i) => {
      let name
      for(let key in this.props.champObj){
        if(this.props.champObj[key] === item.championId){
          name = key
        }
      }
     
      return (
        <ChampionData
          championId={item.championId}
          champName={name}
          championLevel={item.championLevel}
          championPoints={item.championPoints}
          key={item.championId}
        />
      )
    }).splice(0, 12)
   
    return (
      <div>
        <div className="profile">
          <h1>profile</h1>
          <form onSubmit={this.handleSubmit}>
            <input 
            type="text"
            name="summID"
            value={this.state.summID}
            onChange={this.handleChange}
          />
          <button>Submit</button>
          </form>
          </div>
            <div className="user_data">
              {mappedUserData}
            </div>
        </div>
    )
  }
}


export default connect(state=>state, { getData })(Profile);