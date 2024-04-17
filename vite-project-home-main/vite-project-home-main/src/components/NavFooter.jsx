import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import  Logo from './Logo'

 const NavFooter = () => (
  <Container as="footer" role="contentinfo" py={{ base: '5', md: '0' }} backgroundColor={'blue.500'} color={'whiteAlpha.900'} boxSizing='border-box' maxW='100%' paddingY={'0px'}>
    <Stack >
      <Stack justify="space-between" direction="row" align="center">
        <Logo size = {"8rem"}/>
        <ButtonGroup variant="tertiary" paddingRight={20}>
          <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.subtle" display='flex' justifyContent='center'>
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
)

export default NavFooter;
