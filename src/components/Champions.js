import React, { Component } from 'react';
// import { connect } from 'react-redux';
import champData from '../champNames.json'
// import { champions } from '../redux';

class Champions extends Component {
    state = {
    }
    // componentDidMount(){
    //     this.props.champions()
    //   }
  render() {
    const champNames = champData.data
    const keys = Object.keys(champNames);
    return (
      <div className="teemo">
        <h1 className="h1">champions:</h1>
        <ul>
          {
            keys.map(function(champ){
              return <li key={champNames[champ].id}><h1>{champNames[champ].name} - {champNames[champ].title}</h1> <p>{champNames[champ].lore}</p></li>
            })
          }
        </ul>
      </div>
    )
  }
}


// export default (connect(state=>state, { champions })(Champions));
export default Champions;