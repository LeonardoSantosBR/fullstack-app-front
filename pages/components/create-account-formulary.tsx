import { Box, Flex, Text, Image, Stack, HStack, Input, VStack, Button, InputGroup, InputRightElement, Popover, Grid, GridItem, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react"


function CreateAccountFormulary({ handlevisibility }: any) {
    return (
        <>
            <Box>

                <Text fontSize='19px' color={'#96A4BB'}>Nome completo</Text>
                <InputGroup w={'20rem'} size='md'>
                    <Input
                        pr='4.5rem'
                        type='email'
                        color={'white'}
                    />
                </InputGroup>

                <Text fontSize='19px' mt={5} color={'#96A4BB'}>cpf</Text>
                <InputGroup w={'10rem'} size='md'>
                    <Input
                        pr='4.5rem'
                        type='text'
                        color={'white'}
                    />
                </InputGroup>

                <Text fontSize='19px' mt={5} color={'#96A4BB'}>Data de nascimento</Text>
                <InputGroup w={'20rem'} size='md'>
                    <Input
                        pr='4.5rem'
                        type='date'
                        color={'white'}
                    />
                </InputGroup>

                <HStack spacing={4}>
                    <Box>
                        <Text fontSize='19px' mt={5} color={'#96A4BB'}>Telefone</Text>
                        <InputGroup w={'10rem'} size='md'>
                            <Input
                                pr='4.5rem'
                                type='text'
                                color={'white'}
                            />
                        </InputGroup>
                    </Box>
                    <Box>
                        <Text fontSize='19px' mt={5} color={'#96A4BB'}>Celular</Text>
                        <InputGroup w={'10rem'} size='md'>
                            <Input
                                pr='4.5rem'
                                type='text'
                                color={'white'}
                            />
                        </InputGroup>
                    </Box>
                </HStack>

                <Text fontSize='19px' mt={5} color={'#96A4BB'}>Senha</Text>
                <InputGroup w={'20rem'} size='md'>
                    <Input
                        pr='4.5rem'
                        type='password'
                        color={'white'}
                    />
                </InputGroup>
                <Text fontSize='19px' mt={5} color={'#96A4BB'}>Confirmar senha</Text>
                <InputGroup w={'20rem'} size='md'>
                    <Input
                        pr='4.5rem'
                        type='password'
                        color={'white'}
                    />
                </InputGroup>

                <Box mt={5}>
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

