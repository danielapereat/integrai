import axios, { HttpStatusCode } from "axios";
import { ADD_METHOD, GENERATE_INTEGRATION, SET_NAME, SET_PROVIDER_URL } from "./actionsName";

export function generateIntegration(data){
    return (dispatch) => {
        axios.post("url/dummy", data).then(res => {
            if (res.status !== HttpStatusCode.Created) {
                dispatch({type:GENERATE_INTEGRATION, payload: "ERROR"})
            } else {
                dispatch({type:GENERATE_INTEGRATION, payload: "OK"})
            }
        })
    }
}

export function setName(name){
    return (dispatch) => {
        dispatch({type:SET_NAME, payload: name})
    }
}

export function setReduxProviderURL(url) {
    return (dispatch) => {
        dispatch({type:SET_PROVIDER_URL, payload: url})
    }
}

export function addMethod(method) {
    return (dispatch) => {
        dispatch({type:ADD_METHOD, payload: method})
    }
}