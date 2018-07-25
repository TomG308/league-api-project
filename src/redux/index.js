import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import champNames from '../champNames.json'

import config from '../config'


const champObj = {};

const vsUrl = "https://vschool-cors.herokuapp.com?url=";

export const getData = (summID) => {
    return dispatch => {
        axios.get(`${vsUrl}https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/${summID}?api_key=${config.apiKey}`).then(response =>{

            for(let key in champNames.data){
                champObj[key] = champNames.data[key].id
            }    
            dispatch({
                type: "GET_DATA",
                data: response.data,
                champObj: champObj
            })
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    }
}


export const getSummId = (summName) => {
    return dispatch => {
        axios.get(`${vsUrl}https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summName}?api_key=${config.apiKey}`).then(response => {
            dispatch({
                type: "GET_SUMM_ID",
                id: response.data
            })
        })
    }
}

export const getServerStatus = () => {
    // console.log(response.data)
    return dispatch => {
        axios.get(`${vsUrl}https://na1.api.riotgames.com/lol/status/v3/shard-data?api_key=${config.apiKey}`).then(response => {
            
        dispatch({
                type: "GET_SERVER_STATUS",
                status: response.data
            })
        })
    }
}

const initialState = {
    data: [],
    id: {},
    status: {
    services: []
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                id: state.id,
                status: state.status,
                champObj: action.champObj,
                data: action.data
            }
        case "GET_SUMM_ID":
            return {
                data: state.data,
                status: state.status,
                champObj: state.champObj,
                id: action.id
            }
        case "GET_SERVER_STATUS":
            return {
                data: state.data,
                id: state.id,
                champObj: state.champObj,
                status: action.status
            }
        default:
            return state
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;