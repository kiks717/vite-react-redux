import {ordered as cakeOrdered} from '../cake/cakeSlice';
import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    numOfIceCreams : 20
};

const iceCreamSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        ordered : (state) => {
            state.numOfIceCreams--
        },
        restocked: (state,actions) => {
            state.numOfIceCreams += actions.payload
        },
    },
    //buy cake and get icecream for free
    // extraReducers: {
    //     ['cake/ordered'] : (state) => {
    //         state.numOfIceCreams--/mutiramo stanje pomocu immera
    //     }
    // } DRUGI NACIN
    extraReducers : (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numOfIceCreams--
        })
        //     //prvi argument je action type a to je ordered

    }
    
});

export default iceCreamSlice.reducer;
export const {ordered,restocked} = iceCreamSlice.actions;

// module.exports.icecreamActions = iceCreamSlice.actions;
            // ovako ce biti exportovano(icecreamActions)
