import React, { Component } from 'react';
import CategoryFrom from './CategoryFrom';

class CategoryEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        //console.log(this.props)
        return (
            <CategoryFrom
                btnText="Sửa" 
                match={this.props.match}
            />
        );
    }
}

export default CategoryEdit;