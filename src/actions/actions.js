import axios, { HttpStatusCode } from "axios";
import { GENERATE_INTEGRATION } from "./actionsName";

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