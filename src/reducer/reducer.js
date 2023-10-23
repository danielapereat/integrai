import axios from 'axios'
import { ADD_METHOD, GENERATE_INTEGRATION, SET_NAME, SET_PROVIDER_URL } from '../actions/actionsName';

const initialState={
    name: "",
    providerUrl: "",
    methods:[],
    status: "",
};

function reducer(state=initialState,action) {
    switch (action.type){
        case GENERATE_INTEGRATION: {
            return {
                ...state,
                name: "",
                providerUrl:"",
                files_data:[],
                status: action.payload
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
        case ADD_METHOD: {
            return {
                ...state,
                methods: [...state.methods, action.payload]
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;