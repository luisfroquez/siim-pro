"use client";

import { Center, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Center
        w="100vw"
        h="100vh"
        pos="relative"
        flexDir="column"
        gap={2}
        p={2}
        bg="blue.800"
      >
        <Heading color="white">Distribuidora</Heading>
      </Center>
    </main>
  );
}
