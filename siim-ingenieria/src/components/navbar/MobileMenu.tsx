import { menuArray } from "@/components/navbar/menuArray";
import { Button, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import SlideIn from "../animations/SlideIn";

const MobileMenu = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  const router = useRouter();
  return (
    <AnimatePresence>
      {isOpen && (
        <SlideIn
          direction="toDown"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 99999,
            background:
              "linear-gradient(0deg, rgba(237,242,247,0.5) 0%, rgba(237,242,247,0.75) 50%, rgba(237,242,247,1) 100%)",
            backdropFilter: "blur(20px)",
          }}
          duration={0.5}
        >
          <VStack
            w="100%"
            h="100%"
            display={{ base: "flex", md: "none" }}
            spacing={0}
          >
            {menuArray.map((item, i) => (
              <VStack
                key={i}
                spacing={0}
                flexGrow={1}
                w="100%"
                borderBottom="1px"
                borderColor="white"
                justifyContent="center"
                bg={i === menuArray.length - 1 ? "gray.700" : ""}
                color={i === menuArray.length - 1 ? "white" : ""}
                fontSize="1.5rem"
                transition="0.5s"
                _active={
                  i === menuArray.length - 1
                    ? { bg: "gray.900" }
                    : { bg: "gray.300" }
                }
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  router.push(item.url);
                  toggleMenu();
                }}
              >
                <Text>{item.label}</Text>
              </VStack>
            ))}
            <Button
              onClick={toggleMenu}
              variant="secondary"
              pos="absolute"
              top={2}
              right={2}
            >
              X
            </Button>
          </VStack>
        </SlideIn>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
