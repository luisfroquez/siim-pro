import SlideIn from "@/components/animations/SlideIn";
import {
  Text,
  Flex,
  HStack,
  Image,
  Center,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import styles from "./certificates.module.css";

const images = [
  {
    src: "https://ingenieria.siim.cl/wp-content/uploads/2022/02/NFPA13_EZ-ASSISTENCIA-Torres-Zacari%CC%81as-1-300x232.png",
    label: (
      <Text>
        Curso virtual de NFPA° 13: <br />
        <strong>Instalacion de sistemas de rociadores [Edición 2019]</strong>
      </Text>
    ),
    alt: "Certificate 1",
  },
  {
    src: "https://ingenieria.siim.cl/wp-content/uploads/2022/02/NFPA25_Riordan-Alejandro-Marti%CC%81nez-Mata-1-300x232.png",
    label: (
      <Text>
        Curso virtual de NFPA° 25: <br />
        <strong>
          Inspección, prueba y mantenimiento de sistemas de protección contra
          incendios a base de agua [Edición 2020]
        </strong>
      </Text>
    ),
    alt: "Certificate 2",
  },
  {
    src: "https://ingenieria.siim.cl/wp-content/uploads/2022/02/NFPA72_CL-Torres-Zacari%CC%81as-1-300x232.png",
    label: (
      <Text>
        Curso virtual de NFPA° 72: <br />
        <strong>
          Código nacional de alarmas de incendio y señalización [Edición 2016]
        </strong>
      </Text>
    ),
    alt: "Certificate 3",
  },
  {
    src: "https://ingenieria.siim.cl/wp-content/uploads/2022/02/CERTIFICADO_NOTIFIER_OCT-2023_RIordan-Martinez-1-300x232.png",
    label: (
      <Text>
        Certificate of Factory Training <br />
        <strong>Notifier Onyx University Latin America</strong>
      </Text>
    ),
    alt: "Certificate 4",
  },
  {
    src: "https://ingenieria.siim.cl/wp-content/uploads/2022/02/Diploma-Curso-CA-Jesus-Isea-Enrique-Fernandez-1-232x300.png",
    label: (
      <Text>
        BASH Distribución: <br />
        <strong>Control de acceso y ZKBIOSECURITY V5000</strong>
      </Text>
    ),
    alt: "Certificate 5",
  },
];

const Certificates = () => {
  const [isMd] = useMediaQuery("(min-width: 48em)");
  return (
    <Center
      id="certificaciones"
      minW="100vw"
      minH="100vh"
      p={{ base: 8, xl: 32 }}
    >
      <SlideIn direction="toUp">
        <Stack
          direction={{ base: "column", md: "row" }}
          overflow="hidden"
          bg="gray.100"
          border="1px"
          borderColor="gray.600"
          alignItems="stretch"
          boxShadow="-25px 25px 75px rgba(74, 85, 104, 0.25);"
        >
          {/* TITLE FOR MOBILE */}
          {!isMd && (
            <Flex
              color="gray.900"
              borderLeft={{ md: "1px" }}
              borderBottom="1px"
              borderColor="gray.600"
              fontSize="2xl"
              fontWeight="bold"
              lineHeight="none"
              p={8}
              justifyContent="center"
            >
              <Text alignSelf="center">CERTIFICACIONES</Text>
            </Flex>
          )}
          <HStack
            overflowX="auto"
            alignItems="stretch"
            borderColor="gray.600"
            p={2}
            pt={{ base: 0, md: 2 }}
            pb={0}
          >
            {images.map((images, key) => (
              <Flex
                key={key}
                bg="gray.300"
                gap={{ base: 4, md: 8 }}
                p={{ base: 8, md: 16, xl: 24, "2xl": 32 }}
                minW={{ base: "80%", md: "40%", xl: "80%", "2xl": "60%" }}
                flexDir={{ base: "column", xl: "row" }}
                fontSize={{ base: "xs", md: "sm" }}
              >
                <Image
                  src={images.src}
                  alt={images.alt}
                  height="100%"
                  objectFit="contain"
                />
                {images.label}
              </Flex>
            ))}

            {/* TITLE FOR DESKTOP */}
            {isMd && (
              <Flex
                color="gray.600"
                pos="sticky"
                right={-2}
                top={-2}
                bottom={0}
                fontSize="4xl"
                fontWeight="bold"
                lineHeight="none"
                p={8}
                justifyContent="center"
                className={styles.title}
              >
                <Text alignSelf="center" css={{ writingMode: "vertical-rl" }}>
                  CERTIFICACIONES
                </Text>
              </Flex>
            )}
          </HStack>
        </Stack>
      </SlideIn>
    </Center>
  );
};

export default Certificates;
