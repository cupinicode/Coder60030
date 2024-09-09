import {Box, Text} from "@chakra-ui/react"

export const ItemListContainer = ({greeting}) => {
    return (
        <Box>  
            <Text display={"flex"} justifyContent={"center"} color={"red"}>
               {greeting}
            </Text>
        </Box>
    )
}
