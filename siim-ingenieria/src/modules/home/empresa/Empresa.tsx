import SlideIn from "@/components/animations/SlideIn";
import { Heading, Text, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel";

const Empresa = () => {
  return (
    <VStack
      minH="100vh"
      pt={{ base: 8, md: 16, xl: 32 }}
      spacing={0}
      id="empresa"
    >
      <SlideIn direction="toUp">
        <Heading
          fontSize={{ base: "4xl", xl: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          ml={{ base: 0, xl: "17rem" }}
          alignSelf="flex-start"
          px={{ base: 8, md: 16, xl: 32 }}
        >
          EMPRESA.
        </Heading>
      </SlideIn>
      <SlideIn direction="toUp" delay={0.5}>
        <Stack
          direction={{ base: "column-reverse", xl: "row" }}
          spacing={{ base: 8, xl: 32 }}
          px={{ base: 8, md: 16, xl: 32 }}
          pb={{ base: 8, md: 16, xl: 32 }}
          pt={8}
          alignItems={{ base: "flex-start", xl: "center" }}
          fontSize={{ base: "sm", xl: "md" }}
          lineHeight={6}
        >
          <Text fontWeight="bold" w={{ base: "auto", xl: 48 }}>
            Protegemos vidas y propiedades al mismo tiempo que brindamos un
            valor excepcional a nuestros clientes.
          </Text>
          <Text w="100%">
            Somos{" "}
            <strong>
              SIIM SpA (Servicios integrales de Ingeniería y Montajes).
            </strong>{" "}
            Prestamos servicio en las áreas de seguridad electrónica,
            electricidad y sistemas de protección contra incendios.
            <br />
            <br />
            Además de ejecutar los trabajos antes mencionados, la empresa se
            encarga de realizar proyectos de ingeniería basándose en las normas
            nacionales e internaciones por las cuales se rijan las entidades del
            seguro y las municipalidades del país.
            <br />
            <br />
            Por ello, nuestra empresa de protección contra incendios tiene
            claros sus objetivos, entre los que se encuentra realizar el trabajo
            de forma correcta sin mirar el tiempo necesario para llevarlo a
            cabo. La principal finalidad es que los equipos que instalemos, y/o
            revisemos, estén en perfecto estado de funcionamiento cuando se
            necesiten.
          </Text>
        </Stack>
      </SlideIn>

      <SlideIn direction="toLeft" delay={0.75}>
        <Carousel />
      </SlideIn>
    </VStack>
  );
};

export default Empresa;
