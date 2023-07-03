"use client";

import { useIsMounted } from "@/hooks/useIsMounted";
import { theme } from "@/theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Loading from "./loading";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, []);

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {showLoader && <Loading />}
        {isMounted && children}
      </ChakraProvider>
    </CacheProvider>
  );
}
