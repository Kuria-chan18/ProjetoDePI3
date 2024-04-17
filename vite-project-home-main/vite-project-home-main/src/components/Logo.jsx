import {Link,Image} from '@chakra-ui/react'
import BooksImage from "../assets/image/Books-removebg-preview.png"


// eslint-disable-next-line react/prop-types
const Logo =({size}) =>{
    return(
        <Link href='/' display='block' paddingLeft={5} margin={0}>
            <Image src={BooksImage} alt='Logo' width={size}/>
        </Link>
    )
}

export default Logo;