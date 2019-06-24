import * as types from '../constants/categoryType';

var findIndex = (categories, id) => {
    var result = -1;
    categories.forEach((category, index) => {
        if (category.id === id) {
            result = index;
        }
    });
    return result;
}

export var categories = (state = [], action) => {
    var index = -1;
    switch (action.type) {

        case types.FETCH_CATEGORY:
            state = action.payload.data;
            return [...state];

        case types.DELETE_CATEGORY:
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];

        case types.ADD_CATEGORY:
            state.push(action.payload.data);
            return [...state];

        case types.UPDATE_CATEGORY:
            index = findIndex(state, action.payload.data.id);
            state[index] = action.payload.data;
            return [...state];
            
        default:
            return [...state];
    }
}


export const category = (state = [], action) => {
    switch(action.type){
        case types.EDIT_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}