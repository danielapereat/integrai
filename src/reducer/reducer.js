import axios from 'axios'
import { ADD_FILE, GENERATE_INTEGRATION, SET_NAME, SET_PROVIDER_URL } from '../actions/actionsName';

const initialState={
    name: "",
    providerUrl: "",
    files_data:[],
};

function reducer(state=initialState,action) {
    switch (action.type){
        case GENERATE_INTEGRATION: {
            return {
                ...state,
                name: "",
                providerUrl:"",
                files_data:[],
            }
        }
        case SET_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case SET_PROVIDER_URL: {
            return {
                ...state,
                providerUrl: action.payload
            }
        }
        case ADD_FILE: {
            return {
                ...state,
                files_data: [...state.files_data, action.payload]
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;