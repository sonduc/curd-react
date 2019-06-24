import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";

// const styles = theme => ({
// });

function SimpleTable({ ...props }) {
    const { classes, tableData, tableHeaderColor } = props;
    
    //let dataHeader = [];

    // function valueDataHeader(data) {
    //     for (let i = 0; i < data.length; i++) {
    //         if (i === 0) {
    //             dataHeader.push(Object.keys(data[i]));
    //         };
    //     }
    // }

    // valueDataHeader(tableData);
    
    return (
        <div className={classes.tableResponsive}>
            <Table className={classes.table}>
                <TableHead  className={classes[tableHeaderColor + "TableHeader"]}>
                    <TableRow>
                        {/* {dataHeader.map((row, key) => (
                            <TableCell
                                className={classes.tableCell + " " + classes.tableHeadCell}
                                key={key}
                            >
                                {row}
                            </TableCell>
                        ))} */}
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>
                            ID
                        </TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>
                            Tên danh mục
                        </TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>
                            Trạng thái
                        </TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>
                            Ngày sửa đổi
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row, key) => (
                        <TableRow key={key}>
                            {Object.keys(row).map(function (key2) {
                                return (
                                    <TableCell className={classes.tableCell} key={key2}>
                                        {row[key2]}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

SimpleTable.defaultProps = {
    tableHeaderColor: "gray"
};

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
    tableHeaderColor: PropTypes.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    tableHead: PropTypes.arrayOf(PropTypes.string),
};

export default withStyles(tableStyle)(SimpleTable);