import { SiFifa, SiPluscodes } from "react-icons/si"
import { HStack } from "@chakra-ui/layout";

function FifaHeaderComp() {
  return (
    <>
      <HStack
        mb='120px'>
        <SiFifa
          size={"67px"}
          color={"#fff"} />
        <SiPluscodes
          size={"20px"}
          color={"#ffff"} />
      </HStack>
    </>
  );
}

export default FifaHeaderComp;
