import "@/styles/globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import { theme } from "@/theme/components/theme";
import { ChakraBaseProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}
