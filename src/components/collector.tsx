import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Link,
  ListItem,
  Spacer,
  Switch,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";
import useMutationPatchHook from "../hooks/useMutationPatchHook.tsx";
import useMutationDeleteHook from "../hooks/useMutationDeleteHook.tsx";
const BASE_URL = window.location.hostname;
const Collector = ({ survey_id, is_open, url, collector_id }: any) => {
  const updateCollector = useMutationPatchHook(
    `/surveys/${survey_id}/collectors`,
    "getSurveyCollectors",
  );

  const deleteCollector = useMutationDeleteHook(
    `/surveys/${survey_id}/collectors`,
    "getSurveyCollectors",
  );
  const handleCollectorUpdate = () => {
    // @ts-ignore
    updateCollector.mutate({
      payload: { survey_id: survey_id, is_open: !is_open },
      id: collector_id,
    });
  };

  const handleDeleteCollector = () => {
    deleteCollector.mutate(collector_id);
  };

  return (
    <ListItem m={2}>
      <HStack>
        <Link> {`${BASE_URL}/responses/${url}`}</Link>
        <Spacer />
        <Spacer />
        <Box>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="Enabled" mb="0">
              Enabled
            </FormLabel>
            <Switch
              defaultChecked={is_open}
              id="Enabled"
              onChange={handleCollectorUpdate}
            />
          </FormControl>
        </Box>

        <IconButton
          my={1}
          aria-label="delete collector"
          onClick={handleDeleteCollector}
          icon={<DeleteIcon />}
        />
      </HStack>
      <Divider />
    </ListItem>
  );
};

export default Collector;
