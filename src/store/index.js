import { combineReducers } from 'redux';
import { categories, category}  from './reducers/categoryReducer';

const myStore = combineReducers({
    categories,
    category,
});

export default myStore;