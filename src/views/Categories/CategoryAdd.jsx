import React, { Component } from 'react';
import CategoryFrom from './CategoryFrom';

class CategoryAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <CategoryFrom
                btnText="Thêm danh mục" 
            />
        );
    }
}

export default CategoryAdd;