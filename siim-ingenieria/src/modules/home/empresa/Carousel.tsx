import { Center, HStack } from "@chakra-ui/react";
import styles from "./carousel.module.css";
import Image from "next/image";

const imagesArray = [
  { alt: "1", src: "/images/planning.jpg" },
  { alt: "2", src: "/images/obrero.jpg" },
  { alt: "3", src: "/images/planos.jpg" },
  { alt: "1", src: "/images/planning.jpg" },
  { alt: "2", src: "/images/obrero.jpg" },
  { alt: "3", src: "/images/planos.jpg" },
];

const Carousel = () => {
  return (
    <HStack
      className="slider"
      h={{ base: 52, md: 64 }}
      w="100%"
      spacing={0}
      overflow="hidden"
      pos="relative"
      _before={{
        bg: "linear-gradient(to left, #FFFFFF00, #FFFFFFFF)",
        content: '""',
        h: "100%",
        pos: "absolute",
        w: "15%",
        zIndex: "2",
        left: 0,
        top: 0,
      }}
      _after={{
        bg: "linear-gradient(to right, #FFFFFF00, #FFFFFFFF)",
        content: '""',
        h: "100%",
        pos: "absolute",
        w: "15%",
        zIndex: "2",
        right: 0,
        top: 0,
      }}
    >
      <HStack className={styles.sliderTrack} h="100%" w="200%" spacing={0}>
        {imagesArray.map((item, i) => (
          <Center
            key={i}
            className={styles.slide}
            pos="relative"
            minW={{ base: "100%", md: "50%", xl: "33.33%" }}
            h="100%"
            transition="0.5s"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Image
              key={i}
              alt={item.alt}
              src={item.src}
              style={{ objectFit: "cover" }}
              fill
            />
          </Center>
        ))}
      </HStack>
    </HStack>
  );
};

export default Carousel;
