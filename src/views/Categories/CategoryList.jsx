import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';

import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

import GridContainer from "components/Grid/GridContainer.jsx";
import { Link } from "react-router-dom";

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        //marginTop: theme.spacing.unit * 0,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },

    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }

});
class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }
    componentDidMount() {
    }

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        const { classes, categories } = this.props;
        return (
            <GridContainer>
                <Link to="/admin/category/add">
                    <Button variant="contained" className={classes.button}>
                        <AddIcon className={classes.leftIcon} />
                        Thêm
                    </Button>
                </Link>

                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>STT</CustomTableCell>
                                <CustomTableCell>Tên danh mục</CustomTableCell>
                                <CustomTableCell>Trạng thái</CustomTableCell>
                                <CustomTableCell>Ngày sửa đổi</CustomTableCell>
                                <CustomTableCell>Hành động</CustomTableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {categories.map((row, key) => (
                                <TableRow key={key}>
                                    {/* {Object.keys(row).map((key2) =>(
                                        <CustomTableCell> { row[key2] } </CustomTableCell>
                                    ))} */}
                                    <CustomTableCell> {row.id} </CustomTableCell>
                                    <CustomTableCell> {row.name} </CustomTableCell>
                                    <CustomTableCell>
                                        {(row.status === 1) ? 'Nổi bật' : 'Không nổi bật'}
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        {(new Date(row.updated_at)).toLocaleDateString()}
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        <Link to={`/admin/category/edit/${row.id}`}>
                                            <Tooltip
                                                id="tooltip-top"
                                                title="Edit Task"
                                                placement="top"
                                                classes={{ tooltip: classes.tooltip }}
                                            >
                                                <IconButton
                                                    aria-label="Edit"
                                                    className={classes.tableActionButton}
                                                >
                                                    <Edit
                                                        className={
                                                            classes.tableActionButtonIcon + " " + classes.edit
                                                        }
                                                    />
                                                </IconButton>
                                            </Tooltip>
                                        </Link>
                                        <Tooltip
                                            id="tooltip-top-start"
                                            title="Remove"
                                            placement="top"
                                            classes={{ tooltip: classes.tooltip }}
                                            onClick={() => this.onDelete(row.id)}
                                        >
                                            <IconButton
                                                aria-label="Close"
                                                className={classes.tableActionButton}
                                            >
                                                <Close
                                                    className={
                                                        classes.tableActionButtonIcon + " " + classes.close
                                                    }
                                                />
                                            </IconButton>
                                        </Tooltip>
                                    </CustomTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </GridContainer>
        );
    }
}

export default withStyles(styles)(CategoryList);