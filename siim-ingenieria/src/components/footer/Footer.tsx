import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      fontSize="sm"
      p={8}
      lineHeight="none"
      bg="gray.200"
      justifyContent="space-between"
      alignItems="center"
      gap={2}
    >
      <Text>Copyright © 2023 SIIM - Ingeniería</Text>
      <Link href="https://roque-site.vercel.app/" target="_blank">
        <Text
          fontSize="xs"
          as="span"
          transition="0.5s"
          _hover={{ color: "blue.600" }}
        >
          Made with 🖤 by <strong>ROQUE.DEV</strong>
        </Text>
      </Link>
    </Flex>
  );
};

export default Footer;
