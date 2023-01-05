import {
    Box,
    Text,
    HStack,
    Input,
    Button,
    InputGroup
} from "@chakra-ui/react"

import { API } from "../../services/api"
import { useState } from "react"

function CreateAccountFormulary({ handlevisibility }: any) {

    interface interfaceFormulary {
        email: string
        nome: string
        cpf: string
        dataNascimento: string
        telefone: string
        celular: string
        senha: string
        confirmarSenha: string
    }
    const initialFormulary: interfaceFormulary = {
        email: "",
        nome: "",
        cpf: "",
        dataNascimento: "",
        telefone: "",
        celular: "",
        senha: "",
        confirmarSenha: ""
    }

    const [fields, setFields] = useState(initialFormulary)
    
    const handleFieldsChange = (event: any) => {
        setFields({
            ...fields,
            [event.currentTarget.name]: [event.currentTarget.value]

        })
        console.log(fields)
    }

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
                        onChange={handleFieldsChange}
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
                        onChange={handleFieldsChange}
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
                        onChange={handleFieldsChange}
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
                        onChange={handleFieldsChange}
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
                                onChange={handleFieldsChange}
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
                                onChange={handleFieldsChange}
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
                            onChange={handleFieldsChange}
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
                            onChange={handleFieldsChange}
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
                                console.log(response)
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

