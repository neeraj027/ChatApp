import React from "react";
import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import Message from "./Components/Message";

const App = () => {
  return (
    <Box bg={"green.500"}>
      <Container bg={"white"} height={"100vh"}>
        <VStack h={"full"} padding={"4"}>
          <Button w={"full"} colorScheme="red">
            Logout
          </Button>
          <VStack h={"full"} w={"full"}>
            <Message text={"hello"} />
          </VStack>

          <form action="" style={{ width: "100%" }}>
            <HStack>
              <Input
                w={"full"}
                placeholder="Message"
                border={"2px solid blue"}
              ></Input>
              <Button colorScheme="purple">Send</Button>
            </HStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default App;
