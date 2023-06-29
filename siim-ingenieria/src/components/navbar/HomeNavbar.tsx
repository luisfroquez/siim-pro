import SlideIn from "@/components/animations/SlideIn";
import {
  Box,
  Button,
  HStack,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import MenuIcon from "public/icons/MenuIcon";
import { useState } from "react";
import { menuArray } from "./menuArray";
import HorizontalLogo from "../ui/logos/HorizontalLogo";

const HomeNavbar = ({ toggleMenuMobile }: { toggleMenuMobile: () => void }) => {
  const [hover, setHover] = useState<number>();
  const [isXl] = useMediaQuery("(min-width: 48em)");

  return (
    <Stack
      id="homeNavbar"
      p={8}
      spacing={6}
      alignItems="center"
      w="100%"
      direction={{ base: "row", xl: "column" }}
      justifyContent="space-between"
    >
      <SlideIn direction="toDown" style={{ width: "auto" }}>
        <HorizontalLogo width={160} />
      </SlideIn>

      <SlideIn direction="toDown" style={{ width: "auto" }}>
        <Button
          variant="menu"
          display={{ base: "flex", md: "none" }}
          onClick={toggleMenuMobile}
        >
          <MenuIcon />
        </Button>
      </SlideIn>

      <HStack spacing={{ md: 4, xl: 6 }} display={{ base: "none", md: "flex" }}>
        {menuArray.slice(0, 5).map((item, i) => (
          <SlideIn
            key={i}
            direction="toDown"
            delay={i / 10}
            duration={0.5}
            style={{ width: "auto" }}
          >
            <VStack spacing={0}>
              <Link href={item.url} scroll={false} replace>
                <Text
                  variant="navBarLink"
                  fontSize={{ md: "sm", xl: "inherit" }}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(undefined)}
                  transform={hover === i ? "translate(0px,-5px)" : ""}
                >
                  {item.label}
                </Text>
              </Link>
              <Box
                height="1px"
                bg="gray.500"
                transition="0.5s"
                w="110%"
                maxW={hover === i ? 1000 : 0}
              />
            </VStack>
          </SlideIn>
        ))}

        {isXl && (
          <SlideIn
            direction="toDown"
            delay={0.5}
            duration={0.5}
            style={{ width: "auto" }}
          >
            <Link href="https://distribuidora.siim.cl/" target="_blank">
              <Button variant="primary" fontSize={{ md: "sm", xl: "inherit" }}>
                Distribuidora
              </Button>
            </Link>
          </SlideIn>
        )}
      </HStack>
    </Stack>
  );
};

export default HomeNavbar;
