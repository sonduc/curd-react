import React, { Component } from 'react';
import CategoryList from 'views/Categories/CategoryList';

import { connect } from 'react-redux';

//import callApi from "../../utils/apiCaller";
import { fetchAllCategory,actDeleteCategoryRequest } from "../../store/actions/categoryAction";

class CategoryListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        this.props.fetchAllCategory();
    }

    onDelete = (id) => {
        this.props.onDeleteCategory(id);
    }

    render() {
        const { categories } = this.props;
        //const data = categories.data  || [];
        
        return (
            <CategoryList
                categories={categories} 
                onDelete={this.onDelete}
            />
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        categories : state.categories
    }
};

const mapDispatchToProps = (dispatch, props) =>{
    return {
        fetchAllCategory : () =>{
            dispatch(fetchAllCategory());
        },
        onDeleteCategory : (id) => {
            dispatch(actDeleteCategoryRequest(id));
        }
    }
};

export default connect(mapStatetoProps,mapDispatchToProps)(CategoryListContainer);