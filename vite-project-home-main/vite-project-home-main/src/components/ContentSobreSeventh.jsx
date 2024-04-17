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

import { BsFacebook, BsLinkedin, BsInstagram, BsReddit, BsSpotify} from "react-icons/bs";


const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
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
  );
};

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default function GridListWith() {
  return (
    <Box p={20}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Nossos canais
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        Compartilhamos nossa cultura todos os dias nas redes, além de novidades sobre nossas operações e programas.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Instagram'}
            icon={<Icon as={BsInstagram} w={10} h={10} color="gray.500" />}
            /* icon={<Icon as={FcAbout} w={10} h={10} />} */
            description={'Acompanhe tudo que está acontecendo aqui pelo IG @BooksOne.'}
          />
          <Card
            heading={'Reddit'}
            icon={<Icon as={BsReddit} w={10} h={10} color="gray.500" />}
            /* icon={<Icon as={FcCollaboration} w={10} h={10} />} */
            description={'Acompanhe todas as obras tendências pelo nosso reddit.'}
          />
          <Card
            heading={'Spotify'}
            icon={<Icon as={BsSpotify} w={10} h={10} color="gray.500" />}
            /* icon={<Icon as={FcCollaboration} w={10} h={10} />} */
            description={'Acompanhe também nossos audiobooks pelo spotify.'}
          />
          <Card
            heading={'Linkedin'}
            icon={<Icon as={BsLinkedin} w={10} h={10} color="gray.500" />}
            /* icon={<Icon as={FcDonate} w={10} h={10} />} */
            description={'Acompanhe tudo que postamos na nossa página no Linkedin'}
          />
          <Card
            heading={'Facebook'}
            icon={<Icon as={BsFacebook} w={10} h={10} color="gray.500" />}
            /* icon={<Icon as={FcManager} w={10} h={10} />} */
            description={'Acompanhe tudo que postamos na nossa página no Facebook.'}
          />
        </Flex>
      </Container>
    </Box>
  );
}
