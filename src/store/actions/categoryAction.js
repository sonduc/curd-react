import * as types from '../constants/categoryType';
import callApi from  '../../utils/apiCaller.js';

export const fetchAllCategory = () => {
    return (dispatch) => {
        return callApi('categories', 'GET', null).then(response => {
            dispatch(fetchCategory(response.data))
        });
    }
};

export const fetchCategory = (categories) => {
    return {
        type : types.FETCH_CATEGORY,
        payload: categories
    }
};

export const actDeleteCategoryRequest = (id) => {
    return dispatch => {
        return callApi(`categories/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteCategory(id));
        })
    }
}

export const actDeleteCategory = (id) => {
    return {
        type : types.DELETE_CATEGORY,
        id
    }
}

export const actAddCategoryRequest = (category) =>{
    return dispasth => {
        return callApi('categories', 'POST', category).then(res => {
            dispasth(actAddCategory(res.data))
        })
    }
}
export const actAddCategory = (category) =>{
    return {
        type : types.ADD_CATEGORY,
        payload: category
    }
}

export const actGetCategoryRequest = (id) => {
    return dispatch => {
        return callApi(`categories/${id}`, 'GET', null).then(res => {
            dispatch(actGetCategory(res.data));
        });
    }
}

export const actGetCategory = (category) => {
    return {
        type : types.EDIT_CATEGORY,
        payload: category
    }
}

export const actUpdateCategoryRequest = (category) => {
    
    return dispatch => {
        return callApi(`categories/${category.id}`, 'PUT', category).then(res => {
            dispatch(actUpdateCategory(res.data));
        });
    }
}

export const actUpdateCategory = (category) => {
    return {
        type : types.UPDATE_CATEGORY,
        payload: category
    }
}