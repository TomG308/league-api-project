import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getServerStatus } from '../redux';

import ServerData from './ServerData'

class ServerStatus extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    componentDidMount(){
        this.props.getServerStatus()
    }

  render() {
    const mappedStatus = this.props.status.services.map((item, i) =>{

      return(
        <div className="text">
          <ServerData 
            name={item.name}
            game={item.name}
            store={item.incidents}
            key={i+1}
            incidents={item.incidents}
          />
        </div>
      )
    })
    return (
      <div className="server_stye">
        <h4>{mappedStatus}</h4>
      </div>
    )
  }
}

export default connect(state=>state, { getServerStatus })(ServerStatus);
