import React, { Component } from 'react';


export default class ChampionData extends Component {

  render() {
      console.log(this.props)
    return (
    <div className="champ_data_styles">
            <h1>Name: {this.props.champName}</h1>
            <h3>Champion Level:{this.props.championLevel}</h3>
            <h3>Mastery Points Earned:{this.props.championPoints}</h3>
      </div>
    )
  }
}
