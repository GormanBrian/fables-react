import {
  Box,
  Flex,
  Text,
  CloseButton,
  useColorModeValue,
} from "@chakra-ui/react";

import NavItem from "./NavItem";

const SidebarContent = ({ items, onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {items.map((link) => (
        <NavItem key={link.name} {...link} />
      ))}
    </Box>
  );
};

export default SidebarContent;
