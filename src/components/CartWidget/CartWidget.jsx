import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { MdOutlineShoppingCart } from "react-icons/md";

export const CartWidget = () => {
    return(
        <Flex alignItems={"Center"} height={"100%"} justifyContent={"space-between"} width={"50px"}>
            <MdOutlineShoppingCart size={40}/>
            <Text fontSize={"1.5rem"}>1</Text>
        </Flex>
    )
}
