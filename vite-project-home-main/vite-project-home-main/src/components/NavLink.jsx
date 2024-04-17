import { Link,Text, Box} from "@chakra-ui/react"

const NavLink = ({href,text}) =>{
    return(
        <Box>
            <Link href={href}>
                <Text color='white' paddingRight={2}>{text}</Text>
            </Link> 
        </Box>    
    )
}
export default NavLink;