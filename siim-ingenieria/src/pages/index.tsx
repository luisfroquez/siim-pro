import MobileMenu from "@/components/navbar/MobileMenu";
import Certificates from "@/modules/home/certificates/Certificates";
import Contacto from "@/modules/home/contacto/Contacto";
import Empresa from "@/modules/home/empresa/Empresa";
import HomeComponent from "@/modules/home/HomeComponent";
import SomosParte from "@/modules/home/SomosParte";
import DynamicNavbar from "@/components/navbar/DynamicNavbar";
import Servicios from "@/modules/home/servicios/Servicios";
import Team from "@/modules/home/team/Team";
import { Flex, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Head>
        <title>SIIM Ingeniería</title>
        <meta
          name="description"
          content="Servicios integrales de ingeniería y montajes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <DynamicNavbar toggleMenuMobile={onToggle} />
      <MobileMenu isOpen={isOpen} toggleMenu={onToggle} />
      <Flex pos="relative" overflow="hidden" flexDir="column">
        <HomeComponent toggleMenuMobile={onToggle} />
        <Empresa />
        <SomosParte />
        <Servicios />
        <Certificates />
        <Team />
        <Contacto />
        <Footer />
      </Flex>
    </>
  );
}
