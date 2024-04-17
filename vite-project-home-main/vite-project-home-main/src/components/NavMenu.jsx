import { Button, Flex } from "@chakra-ui/react"
import NavLink from "./NavLink"
import { Link } from "react-router-dom"


const NavMenu= ({direction}) =>{
    return(
        <Flex gap='2rem' flexDir={direction} margin={38} >
            <Link to="/"><NavLink text="Home" /></Link>
            <Link to="/sobre"> <NavLink text="Sobre"/></Link>
            <Link to="/ajuda"><NavLink text="Ajuda"/></Link> 
            <Link to="/carrinho"><NavLink text="Carrinho"/></Link> 
            <Link to="/biblioteca"><NavLink text="Biblioteca"/></Link> 
            <Link to="/cadastrar"><Button size='xs' color={"blue.500"}>Sing Up</Button></Link>
            <Link to="/login"  ><Button size='xs' variant='outline' color='white' _hover={{color:"blue.500", bg: "white"} } >Sing In</Button></Link>
        </Flex>
    )
}

export default NavMenu