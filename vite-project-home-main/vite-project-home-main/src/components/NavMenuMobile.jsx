import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IconButton,Box } from "@chakra-ui/react";
import { useState } from "react"
import NavMenu from "./NavMenu";

const NavMenuMobile = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <IconButton colorScheme="blue"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                boxSize="3rem"
                size="2rem"
                onClick={() => setIsOpen(!isOpen)}
            />
            <div style={{ zIndex: 1,
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: "100%",
                        display: isOpen ? "flex" : "none",
                        flexDirection: "column",
                        alignItems: "flex-start",}}>
                <Box
                    p="2rem 8rem"
                    m="0 !important"
                    bgColor={"blue.500"}
                    display={isOpen ? "flex" : "none"}
                >
                    <NavMenu direction={"column"}/>
                </Box>
            </div>
        </>
    );
}

export default NavMenuMobile;
