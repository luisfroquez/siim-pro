import { Icon, IconProps } from "@chakra-ui/react";

const ElectricIcon = ({ props }: { props?: IconProps }) => {
  return (
    <Icon fill="currentcolor" viewBox="0 0 21 25" {...props}>
      <path d="M3.88381 24.271 19.95 10.8721c.4226-.3539.1189-.95001-.4853-.95001h-5.4159l3.475-9.194018c.2129-.561077-.6355-.975509-1.1333-.55789L.343105 13.5563c-.4226296.3539-.118961.95.485242.95H6.18166l-3.43113 9.2132c-.20975.5579.63551.9723 1.1364.5547l-.00312-.0032Z" />
    </Icon>
  );
};

export default ElectricIcon;
