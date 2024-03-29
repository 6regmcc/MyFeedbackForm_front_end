import useQueryHook from "../hooks/useQueryHook.tsx";
import { Avatar, Box } from "@chakra-ui/react";

const AvatarComponent = () => {
  const { isLoading, isError, data, error } = useQueryHook(
    `/users/me`,
    "getUserName",
  );
  console.log(data);
  return (
    <Box>
      <Avatar
        size="lg"
        name={`${data?.data.first_name} ${data?.data.last_name}`}
      />
    </Box>
  );
};

export default AvatarComponent;
