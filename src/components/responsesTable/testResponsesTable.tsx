//@ts-nocheck
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useState } from "react";
import { Container } from "@chakra-ui/react";
import { toLocaleString } from "axios";

const TestGrid = () => {
  const [colDefs, setColDefs] = useState([
    {
      field: "Response_id",
    },
    {
      field: "Date Created",
    },
    {
      field: "Date Modified",
    },
    {
      field: "Collector URL",
    },
    {
      field: "197",
      headerName: "Multichoice question",
    },
    {
      field: "198",
      headerName: "Checkbox question",
      children: [
        {
          field: "270",
          headerName: "Yellow",
        },
        {
          field: "271",
          headerName: "Green",
        },
        {
          field: "272",
          headerName: "Blue",
        },
      ],
    },
    {
      field: "199",
      headerName: "Single Textbox question",
    },
    {
      field: "200",
      headerName: "page 2 textbox qustion",
    },
    {
      field: "201",
      headerName: "p2 multi choice question",
    },
    {
      field: "202",
      headerName: "P2 checkbox ",
      children: [
        {
          field: "276",
          headerName: "one",
        },
        {
          field: "277",
          headerName: "two",
        },
        {
          field: "278",
          headerName: "three",
        },
      ],
    },
  ]);

  const example_data = [
    {
      response_id_: "11",
      date_created: "2024-03-27T17:34:00.259498",
      date_modified: "2024-03-28T21:39:16.248652",
      collector_url: "SOX0MVR4RU",
      responses: [
        {
          question_type: "single_choice",
          question_id: "201",
          choice_id: "274",
          response: "2",
        },
        {
          question_type: "single_choice",
          question_id: "199",
          choice_id: "67",
          response: "tsret",
        },
        {
          question_type: "multi_choice",
          question_id: "198",
          choice_id: "272",
          response: "Blue",
        },
        {
          question_type: "multi_choice",
          question_id: "202",
          choice_id: "276",
          response: "one",
        },
        {
          question_type: "single_choice",
          question_id: "197",
          choice_id: "268",
          response: "TWo",
        },
        {
          question_type: "single_choice",
          question_id: "200",
          choice_id: "68",
          response: "two",
        },
        {
          question_type: "multi_choice",
          question_id: "198",
          choice_id: "270",
          response: "Yellow",
        },
        {
          question_type: "multi_choice",
          question_id: "198",
          choice_id: "271",
          response: "Green",
        },
      ],
    },
    {
      response_id_: "12",
      date_created: "2024-03-28T21:39:34.894132",
      date_modified: "2024-03-28T21:39:37.82496",
      collector_url: "Z0AZL4LQH7",
      responses: [
        {
          question_type: "single_choice",
          question_id: "197",
          choice_id: "269",
          response: "THree",
        },
        {
          question_type: "single_choice",
          question_id: "201",
          choice_id: "275",
          response: "3",
        },
      ],
    },
    {
      response_id_: "13",
      date_created: "2024-03-28T21:39:50.738086",
      date_modified: "2024-03-28T21:39:54.149832",
      collector_url: "Z0AZL4LQH7",
      responses: [
        {
          question_type: "single_choice",
          question_id: "199",
          choice_id: "67",
          response: "hello",
        },
        {
          question_type: "single_choice",
          question_id: "200",
          choice_id: "68",
          response: "hi",
        },
      ],
    },
  ];

  const returnTable = (example_data) => {
    const temp_Arr = [];
    example_data.map((response) => {
      const tempObj = {
        Response_id: response.response_id_,
        "Date Created": new Date(response.date_created).toLocaleString(),
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
  console.log(returnTable(example_data));
  const [rowData, setRowData] = useState(returnTable(example_data));

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

export default TestGrid;
