import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class WideScrollTable extends React.Component {

    render() {
        const data = [];
        for (let i = 0; i < 10000; i++) {
            data.push({col1: i, col6: "Data " + i})
        }
        return (
            <React.Fragment>
                <ReactTable
                    style={{
                        height: "600px",
                        width: "800px"
                    }}
                    columns={[
                        {Header: "Col 1", accessor: "col1", width: 100},
                        {Header: "Col 2", accessor: "col2", width: 100},
                        {Header: "Col 3", accessor: "col3", width: 100},
                        {Header: "Col 4", accessor: "col4", width: 100},
                        {Header: "Col 5", accessor: "col5", width: 100},
                        {Header: "Col 6", accessor: "col6", width: 200},
                        {Header: "Col 7", accessor: "col7", width: 100},
                        {Header: "Col 8", accessor: "col8", width: 100},
                    ]}
                    data={data}
                />
            </React.Fragment>
        );
    }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
            Wide Table Scrolling
        </p>
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>

        <WideScrollTable/>

    </div>
  );
}

export default App;
