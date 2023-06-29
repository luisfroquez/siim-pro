import { extendBaseTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Text } from "./text";

const styles = {
  global: (props: any) => ({
    "html, body": {
      background: "gray.100",
      color: "gray.800",
    },
  }),
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
};

export const theme = extendBaseTheme({
  styles,
  fonts,
  components: {
    Button,Text
  },
});
