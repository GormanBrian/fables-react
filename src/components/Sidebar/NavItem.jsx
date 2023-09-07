import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Flex, Icon } from "@chakra-ui/react";

const NavItem = ({ icon, path, name, ...rest }) => {
  return (
    <ChakraLink
      as={ReactRouterLink}
      to={path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {name}
      </Flex>
    </ChakraLink>
  );
};

export default NavItem;
