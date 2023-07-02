import SlideIn from "@/components/animations/SlideIn";
import { Flex, Heading, HStack, Square, Text, VStack } from "@chakra-ui/react";
import ServicesList from "./ServicesList";
import ServicesListDos from "./ServicesList";

const Servicios = () => {
  return (
    <VStack py={32} justifyContent="space-between" id="servicios">
      <VStack px={{ base: 8, md: 16, xl: 32 }} pb={16}>
        <SlideIn>
          <Heading
            fontSize={{ base: "4xl", xl: "6xl" }}
            fontWeight="bold"
            lineHeight="none"
            alignSelf="flex-start"
          >
            NUESTROS <br /> SERVICIOS.
          </Heading>
        </SlideIn>

        <SlideIn delay={0.5}>
          <Text fontSize="md" lineHeight={6}>
            Nos enfocamos en satisfacer las necesidades en las áreas de
            seguridad electrónica, sistema de protección contra incendios y
            electricidad para el sector industrial, retail, edificios
            comerciales y habitacionales.
          </Text>
        </SlideIn>
      </VStack>

      <SlideIn direction="toLeft" delay={0.75}>
        <ServicesList />
      </SlideIn>
    </VStack>
  );
};

export default Servicios;
