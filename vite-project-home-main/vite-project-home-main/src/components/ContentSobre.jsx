import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    } from "@chakra-ui/react";

    function ContentSobre() {
    return (
        <Box p={20}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Sobre nós</Heading>
            <Text color={"gray.600"} fontSize={"xl"}>
            Bem-vindo à BooksOne - O Destino Literário Digital 
            Na BooksOne, acreditamos apaixonadamente no poder da leitura e na 
            transformação que os livros podem trazer para a vida das pessoas. Somos uma plataforma 
            dedicada a proporcionar uma experiência única e envolvente no universo dos eBooks, 
            conectando leitores ávidos a uma ampla gama de obras literárias de qualidade.
            </Text>
        </Stack>

        </Box>
    );
    }

    export default ContentSobre;
