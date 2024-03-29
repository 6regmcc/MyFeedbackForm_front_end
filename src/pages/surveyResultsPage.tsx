import useQueryHook from "../hooks/useQueryHook.tsx";
import { useParams } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import ResponsesTable from "../components/responsesTable/ResponsesTable.tsx";
import ResultsPageNavBar from "../components/navHeaders/resultsPageNavBar.tsx";
import BuildSurveyPageNavBar from "../components/navHeaders/buildSurveyPageNavBar.tsx";

const SurveyResultsPage = () => {
  const { survey_id } = useParams();
  const {
    isLoading: headersIsLoading,
    isError: headersIsError,
    data: tableHeadersData,
    error: headersError,
  } = useQueryHook(
    `/responses_data/get_table_headings/${survey_id}`,
    "tableHeadings",
  );

  const {
    isLoading: tableIsLoading,
    isError: tableIsError,
    data: tableData,
    error: tableError,
  } = useQueryHook(
    `/responses_data/responses_table_data/${survey_id}`,
    "tableData",
  );

  return (
    <Container maxWidth="2000px">
      <ResultsPageNavBar />
      {tableHeadersData && tableData ? (
        <ResponsesTable
          tableHeaders={tableHeadersData.data}
          tableData={tableData.data}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default SurveyResultsPage;
