import { FireFilled } from "@ant-design/icons";
import {
  Box,
  Divider,
  Flex,
  HStack,
  StylesProvider,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import DesignIcon from "public/icons/DesignIcon";
import ElectricIcon from "public/icons/ElectricIcon";
import FireIcon from "public/icons/FireIcon";
import WorldIcon from "public/icons/WorldIcon";
import React, { useEffect, useState } from "react";
import styles from "./serviceslist.module.css";

const services = [
  {
    key: 1,
    icon: <DesignIcon />,
    label: "Diseño, revisión y evaluación",
    bg: "url(images/diseño-revision.jpg)",
  },
  {
    key: 2,
    icon: <FireIcon />,
    label: "Sistemas de protección contra incendios",
    bg: "url(images/sistemas-contra-incendios.jpg)",
  },
  {
    key: 3,
    icon: <WorldIcon />,
    label: "Sistemas de seguridad electrónica",
    bg: "url(images/sistemas-de-seguridad-electronica.jpg)",
  },
  {
    key: 4,
    icon: <ElectricIcon />,
    label: "Sistemas eléctricos, protección y montajes",
    bg: "url(images/sistemas-electricos.jpg)",
  },
];

const ServicesList = () => {
  const [active, setActive] = useState(2);
  const [order, setOrder] = useState(["1", "2", "3", "4"]);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isLargerThan768) {
      switch (active) {
        case 1:
          setOrder(["2", "3", "4", "1"]);
          break;
        case 2:
          setOrder(["1", "2", "3", "4"]);
          break;
        case 3:
          setOrder(["4", "1", "2", "3"]);
          break;
        case 4:
          setOrder(["3", "4", "1", "2"]);
          break;

        default:
          break;
      }
    } else {
      switch (active) {
        case 1:
          setOrder(["1", "2", "3", "4"]);
          break;
        case 2:
          setOrder(["4", "1", "2", "3"]);
          break;
        case 3:
          setOrder(["3", "4", "1", "2"]);
          break;
        case 4:
          setOrder(["2", "3", "4", "1"]);
          break;

        default:
          break;
      }
    }
  }, [active, isLargerThan768]);

  return (
    <>
      <Flex className={styles["all-slides"]}>
        {services.map((service, i) => (
          <VStack
            key={service.key}
            className={styles["single-slide"]}
            data-order={order[i]}
            onClick={() => setActive(service.key)}
            bgPos="center"
            bgSize="cover"
            bgImg={service.bg}
          >
            <VStack
              alignItems="flex-start"
              justifyContent="flex-end"
              p={4}
              w="100%"
              height="100%"
              color="white"
              bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
            >
              {service.icon}
              <Text
                fontWeight="bold"
                lineHeight={{ base: "1rem", md: 5 }}
                fontSize={{ base: "sm", md: "md", xl: "xl" }}
                textAlign="left"
                maxW={60}
              >
                {service.label}
              </Text>
            </VStack>
          </VStack>
        ))}
      </Flex>
      <Flex w="100%" gap={8} pr={{ base: 8, xl: 16 }} alignItems="center">
        <Box height="3px" bg="gray.300" w="100%">
          <Box w={`${active * 25}%`} h="100%" bg="red.600" transition="2s" />
        </Box>
        {/* <Divider height={"2px"} bg="gray.300" /> */}
        {[1, 2, 3, 4].map((item) => (
          <Text
            key={item}
            onClick={() => setActive(item)}
            cursor="pointer"
            transition="2s"
            fontWeight="bold"
            lineHeight="none"
            fontSize={
              active === item
                ? { base: "4xl", xl: "6xl" }
                : { base: "2xl", xl: "4xl" }
            }
            color={active === item ? "red.600" : "gray.300"}
          >
            {item}
          </Text>
        ))}
      </Flex>
    </>
  );
};

export default ServicesList;
