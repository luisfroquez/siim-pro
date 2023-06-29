import SlideIn from "@/components/animations/SlideIn";
import { Center, Text } from "@chakra-ui/react";
import { SiimIsotipo } from "public/SiimIsotipo";

const SomosParte = () => {
  return (
    <Center w="100%" minH="100vh" pos="relative" p={8}>
      <SlideIn direction="toUp" delay={0.5} style={{ width: "auto" }}>
        <Text
          fontSize={{ base: "2xl", xl: "4xl" }}
          lineHeight={{ base: 8, xl: 10 }}
          maxW={{ base: "100%", md: "24rem", xl: "50rem" }}
          textAlign={{ base: "left", md: "center" }}
        >
          Somos parte de su equipo de operaciones de construcción y{" "}
          <strong>
            trabajamos para garantizar que sus sistemas estén listos para operar
            en cualquier momento.
          </strong>
        </Text>
      </SlideIn>
      <SlideIn
        direction="toDown"
        style={{
          position: "absolute",
          inset: "0,0,0,0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiimIsotipo
          width={{ base: "40rem", md: "32rem" }}
          circleColor="transparent"
          crossColor="#00000010"
          iconsColor="#00000010"
        />
      </SlideIn>
    </Center>
  );
};

export default SomosParte;
