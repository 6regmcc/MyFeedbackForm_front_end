import useQueryHook from "../hooks/useQueryHook.tsx";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  OrderedList,
} from "@chakra-ui/react";
import Collector from "./collector.tsx";

const ListCollectors = ({ survey_id }: any) => {
  const { isLoading, isError, data, error } = useQueryHook(
    `/surveys/${survey_id}/collectors`,
    "getSurveyCollectors",
  );

  const collectorList = data ? data?.data.collectors : [];
  return (
    <Card>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Deployment URLs
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <OrderedList>
              {collectorList.map((collector: any) => {
                return (
                  <Collector
                    key={collector.url}
                    survey_id={survey_id}
                    collector_id={collector.collector_id}
                    is_open={collector.is_open}
                    url={collector.url}
                  />
                );
              })}
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default ListCollectors;
