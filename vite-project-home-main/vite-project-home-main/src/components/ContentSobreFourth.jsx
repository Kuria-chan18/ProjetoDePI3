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
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"left"}>
            <Heading fontSize={"3xl"}>Nossa missão</Heading>
            <Text color={"gray.600"} fontSize={"xl"}>
            Nossa missão é simples, mas poderosa: democratizar o acesso à leitura. 
            Queremos ser a ponte que conecta leitores a escritores, oferecendo uma biblioteca
            virtual diversificada e acessível, onde todos podem encontrar algo que os inspire,
             os transporte para novos mundos e os enriqueça intelectualmente.
            </Text>
        </Stack>

        </Box>
    );
    }

    export default ContentSobre;
