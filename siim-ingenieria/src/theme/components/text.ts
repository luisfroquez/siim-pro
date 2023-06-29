import {
  ComponentDefaultProps,
  ComponentSingleStyleConfig,
  Theme,
} from "@chakra-ui/react";

export const Text: ComponentSingleStyleConfig = {
  variants: {
    navBarLink: {
      as: "a",
      fontWeight: "normal",
      transition: "0.5s",
      cursor: "pointer",
      size: "md",
      lineHeight: 6,
      color: "gray.900",
      _hover: { color: "gray.500" },
    },
  },
};
