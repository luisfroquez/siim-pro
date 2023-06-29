import styles from "./dynamicNavbar.module.css";
import { useState, useEffect, useMemo } from "react";
import {
  Box,
  Button,
  HStack,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import SlideIn from "@/components/animations/SlideIn";
import Link from "next/link";
import MenuIcon from "public/icons/MenuIcon";
import { menuArray } from "./menuArray";
import HorizontalLogo from "../ui/logos/HorizontalLogo";

const DynamicNavbar = ({
  toggleMenuMobile,
}: {
  toggleMenuMobile: () => void;
}) => {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState<number>();
  const [homeNavbarHeight, setHomeNavbarHeight] = useState<number>();
  const [isXl] = useMediaQuery("(min-width: 48em)");

  useEffect(() => {
    setHomeNavbarHeight(document?.getElementById("homeNavbar")?.offsetHeight);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > (homeNavbarHeight ?? 1)) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <AnimatePresence>
      {visible && (
        <SlideIn
          direction="toDown"
          duration={0.75}
          className={styles.navbarContainer}
        >
          <Stack
            id="dynamicHomeNavbar"
            py={2}
            px={{ base: 6, md: 8, xl: 32 }}
            spacing={6}
            alignItems="center"
            w="100%"
            direction="row"
            justifyContent="space-between"
            bg="#FFFFFF99"
          >
            <Link href="/">
              <HorizontalLogo width={100} siimColor="black" />
            </Link>

            <Button
              variant="menu"
              display={{ base: "flex", md: "none" }}
              onClick={toggleMenuMobile}
            >
              <MenuIcon />
            </Button>

            <HStack
              spacing={{ md: 4, xl: 6 }}
              display={{ base: "none", md: "flex" }}
            >
              {menuArray.slice(0, 5).map((item, i) => (
                <VStack key={i} spacing={0}>
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
              ))}

              {isXl && (
                <Link href="https://distribuidora.siim.cl/">
                  <Button
                    variant="primary"
                    fontSize={{ md: "sm", xl: "inherit" }}
                  >
                    Distribuidora
                  </Button>
                </Link>
              )}
            </HStack>
          </Stack>
        </SlideIn>
      )}
    </AnimatePresence>
  );
};

export default DynamicNavbar;
