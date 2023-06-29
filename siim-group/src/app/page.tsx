"use client";

import DistribuidoraVerticalLogo from "@/components/ui/logos/DistribuidoraVerticalLogo";
import IngenieriaVerticalLogo from "@/components/ui/logos/IngenieriaVerticalLogo";
import SIIMGroupLogo from "@/components/ui/logos/SIIMGroupLogo";
import { Box, Button, Center, Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Center w="100vw" h="100vh" pos="relative" flexDir="column" gap={2} p={2}>
        {/* SIIM GROUP */}
        <Center
          pos="relative"
          zIndex={2}
          p={4}
          w="100%"
          h="60%"
          bg="rgba(255, 255, 255, 0.05)"
          borderRadius={8}
        >
          <SIIMGroupLogo />
        </Center>

        {/* TWO OPTIONS */}
        <Center pos="relative" zIndex={2} w="100%" h="40%" gap={2}>
          {/* INGENIERIA */}
          <Center
            w="100%"
            h="100%"
            borderRadius={8}
            _hover={{
              bg: "#5E080D60",
            }}
            transition="0.75s"
          >
            {/* LOGO */}
            <Center w="40%" h="100%">
              <IngenieriaVerticalLogo />
            </Center>
            {/* TEXT */}
            <VStack
              w="60%"
              h="100%"
              alignItems="flex-start"
              justifyContent="center"
              pr={4}
              spacing={8}
            >
              <Text color="white">
                Servicios integrales de ingenería y montajes
              </Text>
              <Link href="/ingenieria">
                <Button variant="iPrimary" size="sm">
                  Ir a ingeniería
                </Button>
              </Link>
            </VStack>
          </Center>

          {/* DIVIDER */}
          <Box w={1} h="100%" bg="gray.600" />

          {/* DISTRIBUIDORA */}
          <Center
            w="100%"
            h="100%"
            borderRadius={8}
            _hover={{
              bg: "#04246260",
            }}
            transition="0.75s"
          >
            {/* LOGO */}
            <Center w="40%" h="100%">
              <DistribuidoraVerticalLogo />
            </Center>
            {/* TEXT */}
            <VStack
              w="60%"
              h="100%"
              alignItems="flex-start"
              justifyContent="center"
              pr={4}
              spacing={8}
            >
              <Text color="white" fontSize="sm">
                Distribuidora de materiales y equipos en las áreas de detección
                y extinción de incendios, seguridad electrónica, ferretería y
                electricidad.
              </Text>
              <Link href="/distribuidora">
                <Button variant="dPrimary" size="sm">
                  Ir a distribuidora
                </Button>
              </Link>
            </VStack>
          </Center>
        </Center>

        {/*BG */}
        <Flex w="100%" h="100%" pos="absolute" top={0} left={0}>
          {/* Overlay */}
          <Box
            pos="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            background="linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.90) 100%)"
            bgBlendMode="multiply"
            backdropFilter="blur(6px)"
          />
          {/* BG IMAGE */}
          <Box
            bgImage="url(/img/SIIM-Group-Home-Background.webp)"
            w="100%"
            h="100%"
            bgSize="cover"
          />
        </Flex>
      </Center>
    </main>
  );
}
