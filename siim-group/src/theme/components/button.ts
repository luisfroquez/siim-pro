import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "300",
  },

  variants: {
    // INGENIERIA:
    iPrimary: {
      color: "white",
      bg: "red.500",
      _hover: {
        bg: "red.600",
      },
    },

    // DISTRIBUIDORA:
    dPrimary: {
      color: "white",
      bg: "blue.500",
      _hover: {
        bg: "blue.600",
      },
    },
  },
};
