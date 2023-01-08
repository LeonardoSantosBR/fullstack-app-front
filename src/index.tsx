import {
  Box,
  Flex,
  Text,
  Input,
  VStack,
  Button,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react"

import { API } from "./services/api"
import { useReducer, useState } from "react"

import { AiFillEye } from "react-icons/ai"
import { AiFillEyeInvisible } from "react-icons/ai"

import CreateAccountFormulary from "./components/forms/create-account-formulary"
import FifaHeaderComp from "./components/headers/fifa-header-component"


export default function Home() {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  //set visibility form
  const [SideVisibility, setSideVisibility] = useState(true)
  const handleVisibility = () => setSideVisibility(!SideVisibility)



  function reducer(state: any, action: any) {
    switch (action.type) {
      case 'email':
        return { ...state, email: action.payload.value }
      case 'senha':
        return { ...state, senha: action.payload.value }
      default:
        return state
    }
  }

  const initialState = {
    email: "",
    senha: ""
  }

  const [fields, dispatch] = useReducer(reducer, initialState)

  return (
    <Flex
      id="containerPrincipal"
      w="100%"
      h="100vh"
    >
      <Flex
        width={"70%"}
        id="leftSide"
        bgImage="https://conteudo.imguol.com.br/c/esporte/68/2020/04/21/cristiano-ronaldo-faz-comemoracao-calma-calma-contra-o-barcelona-em-2012-1587494648948_v2_1920x1296.jpg"
        bgSize={"cover"}
        bgPosition="center"
        bgRepeat="no-repeat"
        padding={"50px"}
      >
        <Box
          mt={50}
          p="20">
          <VStack
            spacing={'10px'}>
            <VStack>
              <FifaHeaderComp />
            </VStack>
            <Text
              color={"gray.50"}
              fontSize='5xl'
              fontWeight='extrabold'
            >
              A casa onde vai encontrar tudo sobre futebol.
            </Text>
            <Text
              as={'b'}
              color={'gray.50'}
              fontSize='2xl'
            >
              Registre-se para aceder aos nossos programas e documentários originais, bem como ao melhor arquivo de sempre. The Happiest Man in the World (O Homem mais Feliz do Mundo) Disponível apenas em FIFA+
            </Text>
          </VStack>
        </Box>

      </Flex>
      {SideVisibility ?
        <Flex
          id="rightSide"
          w={"30%"}
          bgGradient='linear(90deg,
            rgba(0,4,91,1)
            12%,
            rgba(0,0,0,1)
            99%)'
        >
          <Flex>
            <Box
              mt={50}
              p="20">
              <Text
                color={"gray.50"}
                fontSize='4xl'
                fontWeight='medium'
                mb={90}
              >
                Registre-se...
              </Text>
              <VStack
                spacing={'40px'}>
                <Box>
                  <Text
                    fontSize='17px'
                    color={'#96A4BB'}>
                    Email
                  </Text>
                  <InputGroup
                    w={'25rem'}
                    size='md'>
                    <Input
                      name="email"
                      value={fields.email}
                      onChange={event => dispatch({
                        type: "email",
                        payload: { value: event.target.value },
                        caretPosition: event.target.selectionStart
                      })}
                      width={'19rem'}
                      variant='flushed'
                      pr='4.5rem'
                      type='email'
                      color={'white'}
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <Text
                    fontSize='17px'
                    color={'#96A4BB'}>
                    Sua
                    senha
                  </Text>
                  <InputGroup
                    mb={10}
                    w={'25rem'}
                    size='md'>
                    <Input
                      name="senha"
                      value={fields.senha}
                      onChange={event => dispatch({
                        type: "senha",
                        payload: { value: event.target.value },
                        caretPosition: event.target.selectionStart
                      })}
                      width={'19rem'}
                      variant='flushed'
                      pr='4.9rem'
                      type={show ? 'text' : 'password'}
                      color={'white'}
                    />
                    <InputRightElement
                      width='17rem'>
                      <Button
                        backgroundColor={'inherit'}
                        size='sm'
                        onClick={handleClick}>
                        {show ? <AiFillEyeInvisible color="white" size={'19px'} /> : <AiFillEye color="white" size={'19px'} />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Button
                    colorScheme='blue'
                    fontSize={14}
                    paddingInline={8}
                    borderRadius={30}>
                    Entrar
                  </Button>
                  <Text
                    mt={'45px'}
                    cursor={'pointer'}
                    fontSize='19px'
                    _hover={{ textDecoration: 'underline' }}
                    color={'#01A9FF'}
                  >
                    Esqueceu-se da sua senha?
                  </Text>
                  <Box mt={'40px'}>
                    <Text
                      color={'white'}
                      cursor={'pointer'}>
                      Não tem conta?
                    </Text>
                    <Button
                      borderRadius={'50px'}
                      colorScheme='whiteAlpha'
                      variant='outline'
                      mt={'5px'}
                      onClick={handleVisibility}>
                      Registrar
                    </Button>
                  </Box>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Flex>
        :
        <Flex
          id="rightSide"
          w={"30%"}
          bgGradient='linear(90deg,
          rgba(0,4,91,1)
          12%,
          rgba(0,0,0,1)
          99%)'>

          <Flex >
            <Box
              mt={50}
              p="20">
              <Text
                color={"gray.50"}
                fontSize='4xl'
                fontWeight='medium'
                mb={10}
              >
                Criar conta
              </Text>
              <VStack spacing={'10px'}>
                <CreateAccountFormulary
                  handlevisibility={handleVisibility} />
              </VStack>
            </Box>
          </Flex>
        </Flex>
      }
    </Flex>
  )
}


