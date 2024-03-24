import useQueryHook from "../hooks/useQueryHook.tsx";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  HStack,
  OrderedList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Collector from "./collector.tsx";
import { useState } from "react";
import useMutationPostHook from "../hooks/useMutationPostHook.tsx";

const ListCollectors = ({ survey_id }: any) => {
  const { isLoading, isError, data, error } = useQueryHook(
    `/surveys/${survey_id}/collectors`,
    "getSurveyCollectors",
  );

  const openAccordion = () => {
    setIndex(0);
  };

  const createCollector = useMutationPostHook(
    `/surveys/${survey_id}`,
    "getSurveyCollectors",
    openAccordion,
  );

  const [index, setIndex] = useState(1);

  const handleAccordionClick = () => {
    if (index === 0) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  };

  const handleCreateCollector = () => {
    // @ts-ignore
    createCollector.mutate({ id: "collectors" });
  };

  const collectorList = data ? data?.data.collectors : [];
  return (
    <Card>
      <Accordion allowToggle index={index}>
        <AccordionItem>
          <h2>
            <AccordionButton onClick={handleAccordionClick}>
              <Box as="span" flex="1" textAlign="left">
                <HStack>
                  <Text fontSize="lg"> Deployment URLs</Text>
                  <Spacer />
                </HStack>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <Button m={3} onClick={handleCreateCollector}>
              Create URL
            </Button>
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
