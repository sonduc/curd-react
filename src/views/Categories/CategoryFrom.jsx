import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import { createBrowserHistory } from "history";
import { actAddCategoryRequest, actGetCategoryRequest, actUpdateCategoryRequest } from "../../store/actions/categoryAction";

const styles = theme => ({
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
    titleCate: {
        marginBottom:0,
        textTransform:'none',
        color: '#999999fa',
        fontWeight: '400',
    },

});

const history = createBrowserHistory();

class CategoryFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:"",
            status: "0",
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditCategory(id);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.category){
            var {category} = nextProps;
            this.setState({
                id : category.data.id,
                name : category.data.name,
                status : category.data.status.toString(),
            });
        }
    }

    onSave = (e) =>{
        e.preventDefault();
        var { id, name, status } = this.state;
        var category = {
            id : id,
            name : name,
            status: parseInt(status),
        };
        if (id) {
            this.props.onUpdateCategory(category);
        } else {
            this.props.onAddCategory(category);
        }
        history.goBack();
    }

    handleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { classes, btnText } = this.props;
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Thông tin</h4>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <TextField
                                        name="name"
                                        label="Tên danh mục"
                                        value={this.state.name}
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                    <h6 className={classes.titleCate}>Nổi bật</h6>
                                    <RadioGroup
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.handleChange}
                                        row
                                    >
                                        <FormControlLabel
                                            value="0"
                                            control={<Radio color="primary" />}
                                            label="Không"
                                        />
                                        <FormControlLabel
                                            value="1"
                                            control={<Radio color="primary" />}
                                            label="Có"
                                        />
                                    </RadioGroup>
                                
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" onClick={this.onSave}>{btnText}</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        category : state.category
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddCategory : (category) => {
            dispatch(actAddCategoryRequest(category));
        },
        onEditCategory : (id) => {
            dispatch(actGetCategoryRequest(id));
        },
        onUpdateCategory : (category) => {
            dispatch(actUpdateCategoryRequest(category));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(CategoryFrom));