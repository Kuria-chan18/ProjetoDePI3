import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Input,
    Grid,
    Box,
    Image,
 
  } from '@chakra-ui/react'
  import { ChevronRightIcon } from '@chakra-ui/icons'
import styles from './MenuBar.module.css';
import BooksImage from "../assets/image/Books-removebg-preview.png";


function MenuBar(){
    return(
        <div className={styles.menuBar}>

            <Grid templateColumns='repeat(3, 1fr)' padding={0}  background={'blue.500'}>
                <Box w='200px' paddingLeft={10}>
                    <Image src={BooksImage}  w={100}/>
                </Box>
                <Box w='600px' h='10' marginLeft={1} paddingTop={7}>
                    <Input placeholder='Pesquisar Ebook' size='sm' htmlSize={4} width= '500px'
                      focusBorderColor='lime'
                     _placeholder={{ opacity: 1, color: 'white' }}
                    />
                </Box>

                <Flex justify={'flex-end'}>
                    <Box marginRight={3} paddingTop={7}>
<Breadcrumb spacing='8px' separator={<ChevronRightIcon color='white.500' />} 
                        >
                            <BreadcrumbItem>
                                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink href='#'>Sobre</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem >
                                <BreadcrumbLink href='#'>Biblioteca</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>
                </Flex>
            </Grid>
        </div>
    )
}
export default MenuBar;