import React from 'react';

const Incident = (props) => {
    const mappedIncident = props.updates.map((item, key) => {
        console.log(item)
        return (
            <div key={key + 1}>
            
                {item.content}
                
            </div>
        )
    })
    console.log(props)
    console.log(props.active)
    return(
        <div>
            {/* Updates: {mappedIncident} */}
            <h3>
            {/* Server Status: {props.active.toString()} */}
            </h3>
            <p>Server issues: {mappedIncident}</p>
        </div>
    )
}

export default Incident;