import { Avatar, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Message = ({ text, user = "other", uri }) => {
  return (
    <HStack
      maxWidth={"300"}
      alignSelf={user === "me" ? "flex-start" : "flex-end"}
      bg={"gray.300"}
      paddingY={"2"}
      paddingX={"4"}
      borderBottomRightRadius={user === "me" ? "12" : ""}
      borderBottomLeftRadius={user === "me" ? "" : "12"}
      borderTopRadius={"12"}
      position={"relative"}
    >
      {user === "me" && (
        <Avatar
          position={"absolute"}
          bottom={"1"}
          left={2}
          w={"8"}
          h={"8"}
        ></Avatar>
      )}

      <Text
        marginLeft={user === "me" ? "8" : ""}
        marginRight={user === "me" ? "" : "8"}
        fontWeight={"500"}
      >
        {text}
      </Text>

      {user === "other" && (
        <Avatar
          position={"absolute"}
          bottom={"1"}
          right={2}
          w={"8"}
          h={"8"}
        ></Avatar>
      )}
    </HStack>
  );
};

export default Message;
