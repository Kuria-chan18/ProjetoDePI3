import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcReading,
} from 'react-icons/fc'

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  )
}

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default function gridListWith() {
  return (
    <Box p={16}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        Central de ajuda
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        Está com dúvidas e precisa de ajuda? Aqui você encontra informações essenciais para se tornar parceiro.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
      <Stack p={10} spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Como podemos ajudar você?</Heading>
        </Stack>
        <Flex flexWrap="" gridGap={6} justify="center">
          <Card
            heading={'Ebooks Autorais'}
            icon={<Icon as={FcReading} w={10} h={10} />}
            description={'Confira as dúvidas mais frequentes e guias de ajuda para Ebooks Autorais'}
            href={'#'}
          />
          <Card
            heading={'Editoras'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Confira as dúvidas mais frequentes e guias de ajuda para editoras'}
            href={'#'}
          />
          <Card
            heading={'Patrocinio dos Ebooks'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'Confira as dúvidas mais frequentes e guias de ajuda para Patrocinio dos Ebooks'}
            href={'#'}
          />
          <Card
            heading={'Suporte'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={'Confira as dúvidas mais frequentes e guias de ajuda para você'}
            href={'#'}
          />
          <Card
            heading={'Sobre'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Confira todos as nossas especialidades da nossa plataforma'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}