import { Button, Checkbox, Flex, FormControl, FormLabel, HStack, Heading, Input, Stack, Image, InputRightElement, InputGroup } from "@chakra-ui/react";
import { useContext, useState } from 'react';
import MyContext from '../context/AuthContext';
import { Link } from "react-router-dom";


const Login = () => {
    const { username, setUsername, password, setPassword } = useContext(MyContext);
    

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignIn = () => {
        // Implemente sua lógica de login aqui usando os valores de username e password
        console.log("Fazendo login com:", username, password);
        
    };
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    
    return (
        
        <div>
            <HStack w="full" h="100vh">
                <Flex w="full" h="full" borderRightWidth={1} display={{ base: 'none', md: 'flex' }}>
                    <Image objectFit="cover" w="full" h="full" src="https://i.pinimg.com/736x/ff/20/ea/ff20ea12c19ab2f62722c0667d24c529.jpg" />
                </Flex>
                <Flex w='full' h='full' alignItems="center" justifyContent="center">
                    <Stack w="full" maxW='md' spacing={4} p={6}>
                        <Heading fontSize="2xl" color="blue.500"> Faça login na sua conta </Heading>
                        <FormControl id="user">
                            <FormLabel>Nome de Usuário</FormLabel>
                            <Input placeholder="Digite seu nome de usuário" value={username} onChange={handleUsernameChange} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Senha</FormLabel>
                                <InputGroup>
                                    <Input placeholder="*********" type={show ? 'text' : 'password'} value={password} onChange={handlePasswordChange} />
                                    <InputRightElement>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                     </InputRightElement>
                                </InputGroup>
                        </FormControl>
                        <Stack spacing={4} direction="row" align="start" justify="space-between">
                            <Checkbox colorScheme="blue">Lembrar-me</Checkbox>
                            <Link to="/forgot-password" color="blue">Esqueceu a senha?</Link>
                        </Stack>
                        <Link to= "/loginSucesso"><Button colorScheme="blue" onClick={handleSignIn}>Entrar</Button></Link>
                    </Stack>
                </Flex>
            </HStack>
        </div>
    );
};

export default Login;
