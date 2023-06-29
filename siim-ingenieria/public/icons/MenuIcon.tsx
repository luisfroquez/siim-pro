import { Icon, IconProps } from "@chakra-ui/react";

const MenuIcon = (props: IconProps) => {
  return (
    <Icon fill="currentcolor" viewBox="0 0 12 8" {...props}>
      <path d="M0.75 7.5H11.25V6.33324H0.75V7.5ZM0.75 4.58324H11.25V3.41676H0.75V4.58324ZM0.75 0.5V1.66676H11.25V0.5H0.75Z" />
    </Icon>
  );
};

export default MenuIcon;
