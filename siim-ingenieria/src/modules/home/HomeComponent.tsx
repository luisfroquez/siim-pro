import SlideIn from "@/components/animations/SlideIn";
import { VStack } from "@chakra-ui/react";
import React from "react";
import HomeNavbar from "../../components/navbar/HomeNavbar";
import Hero from "./Hero";
import SocialMedia from "./SocialMedia";

const HomeComponent = ({
  toggleMenuMobile,
}: {
  toggleMenuMobile: () => void;
}) => {
  return (
    <VStack minH="100vh" id="home">
      <HomeNavbar toggleMenuMobile={toggleMenuMobile} />
      <Hero />
      <SlideIn direction="toDown" style={{ width: "auto", height: "auto" }}>
        <SocialMedia />
      </SlideIn>
    </VStack>
  );
};

export default HomeComponent;
