import { HStack, Text } from "@chakra-ui/react";
import React from "react";

const Message = ({ text }) => {
  return (
    <HStack>
      <Text>{text}</Text>
    </HStack>
  );
};

export default Message;
