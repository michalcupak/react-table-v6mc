import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import withFixedColumns, {
    withFixedColumnsScrollEvent,
    withFixedColumnsStickyPosition
} from "react-table-hoc-fixed-columns/lib";
import "react-table-hoc-fixed-columns/lib/styles.css";

const ReactTableFixedColumns = withFixedColumnsStickyPosition(ReactTable);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }



  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTableFixedColumns
          style={{height: "400px"}}
          data={data}
          columns={[
            {
              Header: "Name-fixed 1",
              fixed: "left",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Aaa",
              fixed: "left",
                columns: [
                    {
                        Header: "Xxx",
                        accessor: "age",
                    },
                ],
            },
            {
              Header: "Info",
              // fixed: "left",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status",
                    width: 600,
                }
              ]
            },
            {
              Header: 'Stats',
              // fixed: "left",
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits",
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
