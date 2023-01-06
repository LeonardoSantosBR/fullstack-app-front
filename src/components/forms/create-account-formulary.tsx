import {
    Box,
    Text,
    HStack,
    Input,
    Button,
    InputGroup
} from "@chakra-ui/react"

import { API } from "../../services/api"
import { useReducer, useState } from "react"

function CreateAccountFormulary({ handlevisibility }: any) {
    
    function reducer(state: any, action: any) {
        switch (action.type) {
            case "email":
                return { ...state, email: action.payload.value }
            case "nome": {
                return { ...state, nome: action.payload.value }
            }
            case "cpf": {
                return { ...state, cpf: action.payload.value }
            }
            case "dataNascimento": {
                return { ...state, dataNascimento: action.payload.value }
            }
            case "telefone": {
                return { ...state, telefone: action.payload.value }
            }
            case "celular": {
                return { ...state, celular: action.payload.value }
            }
            case "senha": {
                return { ...state, senha: action.payload.value }
            }
            case "confirmarSenha": {
                return { ...state, confirmarSenha: action.payload.value }
            }
            default:
                return state
        }
    }

    const initialState = {
        email: "",
        nome: "",
        cpf: "",
        dataNascimento: new Date(),
        telefone: "",
        celular: "",
        senha: "",
        confirmarSenha: ""
    }

    const [fields, dispatch] = useReducer(reducer, initialState)

    return (

        <>
            <Box>
                <Text
                    fontSize='17px'
                    color={'#96A4BB'
                    }
                >
                    Email
                </Text>
                <InputGroup
                    w={'20rem'}
                    mb={5}
                    size='md'
                >
                    <Input
                        name="email"
                        value={fields.email}
                        onChange={event => dispatch({
                            type: "email",
                            payload: { value: event.target.value },
                            caretPosition: event.target.selectionStart
                        })}
                        type='email'
                        color={'white'}
                    />
                </InputGroup>
                <Text
                    fontSize='17px'
                    color={'#96A4BB'
                    }>
                    Nome completo
                </Text>
                <InputGroup
                    w={'20rem'}
                    size='md'
                >
                    <Input
                        name="nome"
                        value={fields.nome}
                        onChange={event => dispatch({
                            type: "nome",
                            payload: { value: event.target.value },
                            caretPosition: event.target.selectionStart
                        })}
                        pr='4.5rem'
                        type='email'
                        color={'white'}
                    />
                </InputGroup>
                <Text
                    fontSize='17px'
                    mt={5}
                    color={'#96A4BB'
                    }>
                    cpf
                </Text>
                <InputGroup
                    w={'10rem'}
                    size='md'
                >
                    <Input
                        name="cpf"
                        value={fields.cpf}
                        onChange={event => dispatch({
                            type: "cpf",
                            payload: { value: event.target.value },
                            caretPosition: event.target.selectionStart
                        })}
                        pr='4.5rem'
                        type='text'
                        color={'white'}
                    />
                </InputGroup>

                <Text
                    fontSize='17px'
                    mt={5}
                    color={'#96A4BB'
                    }
                >
                    Data de nascimento
                </Text>
                <InputGroup
                    w={'20rem'}
                    size='md'
                >
                    <Input
                        name="dataNascimento"
                        value={fields.dataNascimento}
                        onChange={event => dispatch({
                            type: "dataNascimento",
                            payload: { value: event.target.value },
                            caretPosition: event.target.selectionStart,
                        })}
                        pr='4.5rem'
                        type='date'
                        color={'white'}
                    />
                </InputGroup>

                <HStack
                    id="telefones"
                    spacing={4}
                >
                    <Box>
                        <Text
                            fontSize='17px'
                            mt={5}
                            color={'#96A4BB'
                            }
                        >
                            Telefone
                        </Text>
                        <InputGroup
                            w={'10rem'}
                            size='md'
                        >
                            <Input
                                name="telefone"
                                value={fields.telefone}
                                onChange={event => dispatch({
                                    type: "telefone",
                                    payload: { value: event.target.value },
                                    caretPosition: event.target.selectionStart,
                                })}
                                pr='4.5rem'
                                type='text'
                                color={'white'}
                            />
                        </InputGroup>
                    </Box>
                    <Box>
                        <Text
                            fontSize='17px'
                            mt={5}
                            color={'#96A4BB'}
                        >
                            Celular
                        </Text>
                        <InputGroup
                            w={'10rem'}
                            size='md'
                        >
                            <Input
                                name="celular"
                                value={fields.celular}
                                onChange={event => dispatch({
                                    type: "celular",
                                    payload: { value: event.target.value },
                                    caretPosition: event.target.selectionStart
                                })}
                                pr='4.5rem'
                                type='text'
                                color={'white'}
                            />
                        </InputGroup>
                    </Box>
                </HStack>
                <Box
                    id="senhas"
                    mt={5}
                >
                    <Text
                        fontSize='17px'
                        mt={5}
                        color={'#96A4BB'
                        }
                    >
                        Senha
                    </Text>
                    <InputGroup
                        w={'21rem'}
                        size='md'
                    >
                        <Input
                            name="senha"
                            value={fields.senha}
                            onChange={event => dispatch({
                                type: "senha",
                                payload: { value: event.target.value },
                                caretPositon: event.target.selectionStart
                            })}
                            pr='4.5rem'
                            type='password'
                            color={'white'}
                        />
                    </InputGroup>
                    <Text
                        fontSize='17px'
                        mt={5}
                        color={'#96A4BB'
                        }
                    >
                        Confirmar senha
                    </Text>
                    <InputGroup
                        w={'21rem'}
                        size='md'
                    >
                        <Input
                            name="confirmarSenha"
                            value={fields.confirmarSenha}
                            onChange={event => dispatch({
                                type: "confirmarSenha",
                                payload: { value: event.target.value },
                                caretPosition: event.target.selectionStart
                            })}
                            pr='4.5rem'
                            type='password'
                            color={'white'}
                        />
                    </InputGroup>
                </Box>
                <Box
                    id="finalizarCriacao"
                    mt={0}
                >
                    <Button
                        colorScheme='blue'
                        mr={4}
                        mt={10}
                        fontSize={14}
                        paddingInline={8}
                        borderRadius={30}
                        onClick={async () => {
                            await API.post("/post/users", {
                                fields
                            }).then(response => {
                                console.log(response.data)
                            }).catch(error => {
                                console.log(error)
                            })
                        }}
                    >
                        CRIAR CONTA
                    </Button>
                    <Button
                        colorScheme='blue'
                        mt={10}
                        fontSize={14}
                        paddingInline={8}
                        variant='outline'
                        onClick={handlevisibility}
                    >
                        voltar
                    </Button>
                </Box>
            </Box>
        </>

    );
}

export default CreateAccountFormulary;

