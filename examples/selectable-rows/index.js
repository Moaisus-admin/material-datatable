import React from "react";
import ReactDOM from "react-dom";
import MaterialDatatable from "../../src/";

class Example extends React.Component {

    render() {
        const columns = [
            {   
                name: 'Name', 
                field: 'name',
                options: {
                    width: 70,
                    
                },
            },
            {
                name: 'Title', 
                field: 'title'
            },
            {
                name: 'Location', 
                field: 'location'
            },
            {
                name: 'Age', 
                field: 'age'
            },
            {
                name: 'Salary', 
                field: 'salary'
            },
            {
                name: 'Veeeeery loooooooooong title', 
                field: 'salary',
                options: {
                    width: 100,
                    headerNoWrap: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return `${value.name} (${value.title})`; 
                    }
                },
            }
        ];

        const data = [
            {name: "Veeeeery loooooooooong naaaaaaaaaaame", title: "Title 1", location: "Location 1", age: 30, salary: 10},
            {name: "Name 2", title: "Title 2", location: "Location 2", age: 31, salary: 11},
        ];

        const options = {
            filter: true,
            selectableRows: true,
            usePaperPlaceholder: false,
            filterType: 'dropdown',
            responsive: 'stacked',
            rowsPerPage: 10,
            onRowsSelect: (rowsSelected, allRows) => {
                console.log(rowsSelected, allRows);
            },
            onRowsDelete: (rowsDeleted) => {
                console.log(rowsDeleted, "were deleted!");
            },
            onChangePage: (numberRows) => {
                console.log(numberRows);
            },
            onSearchChange: (searchText) => {
                console.log(searchText);
            },
            onColumnSortChange: (column, direction) => {
                console.log(column, direction);
            },
            onColumnViewChange: (column, action) => {
                console.log(column, action);
            },
            onFilterChange: (column, filters) => {
                console.log(column, filters);
            },
            onCellClick: (cellIndex, rowIndex) => {
                console.log(cellIndex, rowIndex);
            },
            onRowClick: (rowData, rowState) => {
                console.log(rowData, rowState);
            }
        };

        return (
            <MaterialDatatable title={"ACME Employee list"} data={data} columns={columns} options={options}/>
        );

    }
}

ReactDOM.render(<Example/>, document.getElementById("app-root"));
