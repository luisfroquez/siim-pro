import SlideIn from "@/components/animations/SlideIn";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import ChevronRight from "public/icons/ChevronRight";
import React from "react";

const Hero = () => {
  return (
    <Center
      w="100%"
      flexGrow={1}
      px={{ base: 0, md: 8, xl: 32 }}
      alignItems="stretch"
      transition="1s"
    >
      <Stack
        flexGrow={1}
        direction={{ base: "column", md: "row" }}
        transition="1s"
        spacing={0}
      >
        <SlideIn>
          <Center
            w="100%"
            h="100%"
            pos="relative"
            bgImage="url(images/building.jpg)"
            bgPosition="center"
            bgSize="cover"
          >
            <Heading
              pos="relative"
              zIndex={1}
              color="white"
              fontSize="3xl"
              lineHeight="initial"
            >
              Desarrollamos <br />
              <strong>soluciones</strong>
            </Heading>
            <Box
              pos="absolute"
              backgroundColor="rgba(0, 0, 0, 0.7)"
              mixBlendMode="multiply"
              inset="0 0 0 0"
            />
          </Center>
        </SlideIn>

        <Stack w="100%" h="100%" spacing={0}>
          <SlideIn direction="toLeft" delay={0.5}>
            <Flex
              h="100%"
              pos="relative"
              p={6}
              flexDir="column"
              justifyContent="space-between"
              bgImage="url(images/ingenieria.jpg)"
              bgPosition="center"
              bgSize="cover"
            >
              <Heading
                pos="relative"
                zIndex={1}
                color="white"
                fontSize="xl"
                lineHeight="initial"
                maxW={60}
              >
                Servicios integrales de ingeniería y montajes
              </Heading>
              <Link href="/#servicios" style={{ alignSelf: "flex-end" }}>
                <Button pos="relative" zIndex={1} variant="home" size="lg">
                  <ChevronRight />
                </Button>
              </Link>
              <Box
                pos="absolute"
                bg="red.800"
                mixBlendMode="multiply"
                inset="0 0 0 0"
              />
            </Flex>
          </SlideIn>

          <SlideIn direction="toLeft" delay={0.75}>
            <Flex
              h="100%"
              pos="relative"
              p={6}
              flexDir="column"
              justifyContent="space-between"
              bgImage="url(images/distribuidora.jpg)"
              bgPosition="center"
              bgSize="cover"
            >
              <Heading
                pos="relative"
                zIndex={1}
                color="white"
                fontSize="xl"
                lineHeight="initial"
                maxW={60}
              >
                Distribuidora de materiales y equipos
              </Heading>
              <Link
                href="https://distribuidora.siim.cl/"
                target="_blank"
                style={{ alignSelf: "flex-end" }}
              >
                <Button pos="relative" zIndex={1} variant="home" size="lg">
                  <ChevronRight />
                </Button>
              </Link>
              <Box
                pos="absolute"
                bg="blue.800"
                mixBlendMode="multiply"
                inset="0 0 0 0"
              />
            </Flex>
          </SlideIn>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Hero;
