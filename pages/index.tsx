import { Box, Flex, Text, Image, Stack, HStack, Input, VStack, Button, InputGroup, InputRightElement, Popover, Grid, GridItem, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react"
import { useState } from "react"

import SidePresentation from "./components/headers/side-presentation"

import { AiFillEye } from "react-icons/ai"
import { AiFillEyeInvisible } from "react-icons/ai"

import LoginButton from "./components/buttons/login-button-component"
import RegisterButton from "./components/buttons/register-button-component"
import CreateAccountFormulary from "./components/create-account-formulary"

export default function Home() {

  //email
  const [email, setEmail] = useState('')
  const handleChange = (event: any) => setEmail(event.target.value)

  //password
  const [password, setPassword] = useState('')
  const handleChangePassword = (event: any) => setPassword(event.target.value)
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [SideVisibility, setSideVisibility] = useState(true)
  const handleVisibility = () => setSideVisibility(!SideVisibility)

  return (
    <Flex w="100vw" h="100vh">
      <SidePresentation />
      {SideVisibility ?
        <Flex id="rightSide" w="40vw" h="100vh" bgGradient='linear(90deg, rgba(0,4,91,1) 12%, rgba(0,0,0,1) 99%)'>
          <Flex>
            <Box mt={50} p="20">
              <Text
                color={"gray.50"}
                fontSize='4xl'
                fontWeight='medium'
                mb={90}
              >
                Registre-se...
              </Text>
              <VStack spacing={'40px'}>
                <Box>
                  <Text fontSize='19px' color={'#96A4BB'}>Email</Text>
                  <InputGroup w={'25rem'} size='md'>
                    <Input
                      variant='flushed'
                      pr='4.5rem'
                      type='email'
                      color={'white'}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Box>
                <Box>

                  <Text fontSize='19px' color={'#96A4BB'}>Sua senha</Text>

                  <InputGroup mb={10} w={'25rem'} size='md'>
                    <Input
                      variant='flushed'
                      pr='4.9rem'
                      type={show ? 'text' : 'password'}
                      color={'white'}
                      onChange={handleChangePassword}
                    />
                    <InputRightElement width='4.5rem'>
                      <Button backgroundColor={'inherit'} size='sm' onClick={handleClick}>
                        {show ? <AiFillEyeInvisible color="white" size={'19px'} /> : <AiFillEye color="white" size={'19px'} />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <Button colorScheme='blue' fontSize={14} paddingInline={8} borderRadius={30}>Entrar</Button>

                  <Text mt={'45px'} cursor={'pointer'} fontSize='19px' color={'#01A9FF'} >Esqueceu-se da sua senha?</Text>

                  <Box mt={'40px'}>
                    <Text color={'white'} cursor={'pointer'}> Não tem conta?</Text>
                    <Button borderRadius={'50px'} colorScheme='whiteAlpha' variant='outline' mt={'5px'} onClick={handleVisibility}>Registrar</Button>
                  </Box>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Flex>
        :
        <Flex id="rightSide" w="40vw" h="100vh" bgGradient='linear(90deg, rgba(0,4,91,1) 12%, rgba(0,0,0,1) 99%)'>
          <Flex>
            <Box mt={50} p="20">
              <Text
                color={"gray.50"}
                fontSize='4xl'
                fontWeight='medium'
                mb={70}
              >
                Criar conta
              </Text>
              <VStack spacing={'10px'}>
                <CreateAccountFormulary handlevisibility={handleVisibility}/>
              </VStack>
            </Box>
          </Flex>
        </Flex>}
    </Flex>
  )
}


