import { Box, Flex, Text, Image, Stack, HStack, Input, VStack, Button, InputGroup, InputRightElement, Popover, Grid, GridItem, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react"


function CreateAccountFormulary({ handlevisibility }: any) {
    return (
        <>
            <Box>
                <Text fontSize='17px' color={'#96A4BB'}>Nome completo</Text>
                <InputGroup w={'20rem'} size='md'>
                    <Input
                        pr='4.5rem'
                        type='email'
                        color={'white'}
                    />
                </InputGroup>

                <Text fontSize='17px' mt={5} color={'#96A4BB'}>cpf</Text>
                <InputGroup w={'10rem'} size='md'>
                    <Input
                        pr='4.5rem'
                        type='text'
                        color={'white'}
                    />
                </InputGroup>

                <Text fontSize='17px' mt={5} color={'#96A4BB'}>Data de nascimento</Text>
                <InputGroup w={'20rem'} size='md'>
                    <Input
                        pr='4.5rem'
                        type='date'
                        color={'white'}
                    />
                </InputGroup>

                <HStack id="telefones" spacing={4}>
                    <Box>
                        <Text fontSize='17px' mt={5} color={'#96A4BB'}>Telefone</Text>
                        <InputGroup w={'10rem'} size='md'>
                            <Input
                                pr='4.5rem'
                                type='text'
                                color={'white'}
                            />
                        </InputGroup>
                    </Box>
                    <Box>
                        <Text fontSize='17px' mt={5} color={'#96A4BB'}>Celular</Text>
                        <InputGroup w={'10rem'} size='md'>
                            <Input
                                pr='4.5rem'
                                type='text'
                                color={'white'}
                            />
                        </InputGroup>
                    </Box>
                </HStack>
                <Box id="senhas" mt={5}>
                    <Text fontSize='17px' mt={5} color={'#96A4BB'}>Senha</Text>
                    <InputGroup w={'21rem'} size='md'>
                        <Input
                            pr='4.5rem'
                            type='password'
                            color={'white'}
                        />
                    </InputGroup>
                    <Text fontSize='17px' mt={5} color={'#96A4BB'}>Confirmar senha</Text>
                    <InputGroup w={'21rem'} size='md'>
                        <Input
                            pr='4.5rem'
                            type='password'
                            color={'white'}
                        />
                    </InputGroup>
                </Box>
                <Box id="finalizarCriacao" mt={0}>
                    <Button colorScheme='blue' mr={4} mt={10} fontSize={14} paddingInline={8} borderRadius={30}>CRIAR CONTA</Button>
                    <Button colorScheme='blue' mt={10} fontSize={14} paddingInline={8} variant='outline' onClick={handlevisibility}>
                        voltar
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default CreateAccountFormulary;

