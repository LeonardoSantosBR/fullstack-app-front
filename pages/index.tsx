import { Box, Flex, Text, Image, Stack, HStack } from "@chakra-ui/react"
import { SiFifa, SiPluscodes } from "react-icons/si"


export default function Home() {
  return (
    <Flex w="100vw" h="100vh">

      <div id="teste">
        <Flex w="60vw" h="100vh" bg={'blue'}>
          <Box p="20" borderColor='gray.200'>
            <Stack spacing={'50px'} >
              <HStack>
                <SiFifa size={'67px'} color={'#ffff'} />
                <SiPluscodes size={'20px'} color={'#ffff'} />
              </HStack>
              <Text
                bgGradient='linear(90deg, rgba(213,212,230,1) 12%, rgba(219,219,219,1) 99%)'
                bgClip='text'
                fontSize='5xl'
                fontWeight='extrabold'
              >
                A casa onde vai encontrar tudo sobre futebol.
              </Text>
              <Text as={'b'} color={'#ffff'} fontSize='2xl'>
                Registe-se para aceder aos nossos programas e documentários originais, bem como ao melhor arquivo de sempre. The Happiest Man in the World (O Homem mais Feliz do Mundo) Disponível apenas em FIFA+
              </Text>
            </Stack>
          </Box>
        </Flex>
      </div>


      <Flex id="rightSide" w="40vw" h="100vh" bgGradient='linear(90deg, rgba(2,0,36,1) 40%, rgba(9,9,121,1) 99%)'></Flex>

    </Flex>
  )
}
