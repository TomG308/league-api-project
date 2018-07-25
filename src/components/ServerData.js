import React, { Component } from 'react'
import Incident from './Incident';

export default class ServerData extends Component {
  render() {
      const mappedIncidents = this.props.incidents.map((item, i) => {
        return (
         <Incident updates={item.updates} active={item.active} key={i + 1}/>
        )
      })
    return (
      <div>
        <h1>{this.props.name} Server: </h1>
       {mappedIncidents}
      </div>
    )
  }
}
