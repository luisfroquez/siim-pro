import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { Button } from "./components/button";

export const components = { Button };

export const theme = extendTheme({
  colors,
  components,
});
