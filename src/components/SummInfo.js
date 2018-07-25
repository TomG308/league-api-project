import React from 'react'

const SummInfo = (props) => {
    return(
        <div className="get-id">
            <h2>Name:</h2> <p>{props.name}</p>
            <h2>Summoner Id:</h2> <p>{props.id}</p>
            <h2>Summoner level:</h2> <p>{props.summonerLevel}</p>
            
        </div>
    )
}

SummInfo.defaultProps = {
            name:'',
            id: '',
            summonerLevel: ''
}

export default SummInfo;