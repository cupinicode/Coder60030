import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { CartWidget } from "../CartWidget"
import { Link } from "react-router-dom"
import { useItemsCollection } from "../../hooks"
// import { createProductsFirestore } from "../../helpers"

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { items } = useItemsCollection("categories");

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to="/">Home</Link>
          </Box>
          <Menu>
            <MenuButton as={Link} cursor="pointer" style={{ marginLeft: 30 }}>
              Categorias
            </MenuButton>
            <MenuList height={"fit-content"} overflowY={"scroll"}>
              {items.map((category) => (
                <MenuItem key={category.slug}>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          {/* <Button onClick={() => createProductsFirestore("products")}>
            Boton que crea productos en Firebase, a partir de los datos del array
            NO LO USO, LO DEJO PARA RECORDAR
          </Button> */}
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <CartWidget />
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>User1</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Mis ordenes</MenuItem>
                  <MenuItem>Mi cuenta</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}