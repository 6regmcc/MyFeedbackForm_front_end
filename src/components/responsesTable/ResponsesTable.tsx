//@ts-nocheck
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useState } from "react";
import { Container } from "@chakra-ui/react";

const ResponsesTable = ({ tableHeaders, tableData }) => {
  const [colDefs, setColDefs] = useState(tableHeaders);

  const returnTable = (tableData) => {
    console.log(tableData);
    const temp_Arr = [];
    tableData.map((response) => {
      const tempObj = {
        Response_id: response.response_id_,
        "Date Created": new Date(response.date_created).toLocaleString(),
        "Date Modified": new Date(response.date_modified).toLocaleString(),
        "Collector URL": response.collector_url,
      };
      response.responses.map((obj) => {
        if (obj.question_type === "multi_choice") {
          tempObj[obj.choice_id] = obj.response;
        } else {
        }
        tempObj[obj.question_id] = obj.response;
      });
      temp_Arr.push(tempObj);
    });
    return temp_Arr;
  };

  const [rowData, setRowData] = useState(returnTable(tableData));

  return (
    <Container maxWidth="2000px">
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // the grid will fill the size of the parent container
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </Container>
  );
};

export default ResponsesTable;
