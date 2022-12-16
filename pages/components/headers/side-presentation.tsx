import {
  Box,
  Flex,
  Text,
  Stack,
  HStack
} from "@chakra-ui/react"

//import { GetStaticProps } from "next";
import FifaHeaderComp from "../../components/headers/fifa-header-component"


function SidePresentation() {
  const backgroundImage = {
    background:
      'url(https://i.pinimg.com/originals/f3/16/47/f31647748784553e80f704fb221e327a.jpg) center/cover no-repeat',
  }
  return (
    <Flex
      id="leftSide"
      sx={backgroundImage}
      w="70vw"
      h="100vh">

      <Box
        mt={50}
        p="20">
        <Stack
          spacing={'10px'}>
          <HStack>
            <FifaHeaderComp />
          </HStack>
          <Text
            width={'30rem'}
            color={"gray.50"}
            fontSize='5xl'
            fontWeight='extrabold'
          >
            A casa onde vai encontrar tudo sobre futebol.
          </Text>
          <Text
            width="30rem"
            as={'b'}
            color={'gray.50'}
            fontSize='2xl'>
            Registre-se para aceder aos nossos programas e documentários originais, bem como ao melhor arquivo de sempre. The Happiest Man in the World (O Homem mais Feliz do Mundo) Disponível apenas em FIFA+
          </Text>
        </Stack>
      </Box>

    </Flex>
  );
}
export default SidePresentation;

/*export const getStaticProps: GetStaticProps = async () => {
  const messageOne = 'A casa onde vai encontrar tudo sobre futebol.'
  const messageTwo = 'Registre-se para aceder aos nossos programas e documentários originais, bem como ao melhor arquivo de sempre. The Happiest Man in the World (O Homem mais Feliz do Mundo) Disponível apenas em FIFA+',
  return {
    props: {
      messageOne,
      messageTwo
    }
  }
}*/