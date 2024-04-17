import { Heading, Card,CardBody,CardFooter, CardHeader, Text, Button} from '@chakra-ui/react'
import MyContext from '../context/AuthContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'



const LoginSucesso = () =>{
    const {username} = useContext(MyContext)
    
    return (
        <>
            <Card align='center' margin='auto' p={'150px'} >
                <CardHeader>
                    <Heading size='lg' color={'blue.500'}> Login Realizado Com Sucesso!</Heading>
                    </CardHeader>
                <CardBody >
                    <Text fontSize={20}  >Bem vindo <Text  fontSize='22px' color='blue.500' display='inline'>{username}</Text> ao Book The Phone sua plataforma de E-Books Online</Text>
                </CardBody>
                <CardFooter>
                    <Link to="/"><Button colorScheme='blue'>Comece a ler agora mesmo</Button></Link>
                </CardFooter>
            </Card>
        </>
    )
}
export default LoginSucesso