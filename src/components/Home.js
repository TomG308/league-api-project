import React, { Component } from "react";
import { connect } from 'react-redux';
import { getSummId } from '../redux';
import SummInfo from "./SummInfo";



class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            summName: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.getSummId
    }

   handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
   }

    handleSubmit(e) {
        e.preventDefault()
        this.props.getSummId(this.state.summName)
    }

  render() {
    return (
      <div className="home-body">
        <h1>Welcome Summoner</h1>
        <form onSubmit={this.handleSubmit}>
            <div className="banner">
                <h3>Enter you Summoner name here:</h3>
                <h3>Copy your summoner ID to get your champion mastery</h3>
            </div>
            <input 
                type="text"
                name="summName"
                value={this.state.summName}
                onChange={this.handleChange}
                className="name-input"
            />
            <button>Submit</button>
        </form>
        <div className="summoner-info">
            <SummInfo {...this.props.id}/>
        </div>
      </div>
    )
  }
}

export default connect(state=>state, { getSummId })(Home);