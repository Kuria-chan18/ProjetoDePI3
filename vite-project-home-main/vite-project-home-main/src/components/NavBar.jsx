import { HStack, useMediaQuery, Box, Input } from "@chakra-ui/react"
import Logo from "./Logo"
import NavMenu from "./NavMenu"
import NavMenuMobile from "./NavMenuMobile";

const NavBar = () =>{
    const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
    return(
        <Box position={"relative"}>
            <HStack bgColor="blue.500" w="full" p="1rem 8 rem" justifyContent="space-between">

            <Logo size="12rem"/>
            <Input placeholder='Pesquisar Ebook' size='sm' htmlSize={4} 
                      focusBorderColor='white'
                     _placeholder={{ opacity: 1, color: 'white' }}
                    color={"White"}
                    />
            {isLargerThanMD?<NavMenu/>:<NavMenuMobile/>}

        </HStack>
        </Box>
        
    )
}
export default NavBar
