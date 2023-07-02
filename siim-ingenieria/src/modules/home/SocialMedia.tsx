import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Link, Stack } from "@chakra-ui/react";

const SocialMedia = () => {
  return (
    <Stack
      p={8}
      direction="row"
      justifyContent="center"
      alignItems="center"
      color="gray.700"
    >
      <Link href="https://www.facebook.com/SIIMSPAgroup" target="_blank">
        <FacebookOutlined width="24px" rev={undefined} />
      </Link>
      <Link href="https://www.instagram.com/siim_spa/" target="_blank">
        <InstagramOutlined width="24px" rev={undefined} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/siim-group-43b2bb1b9/"
        target="_blank"
      >
        <LinkedinOutlined width="24px" rev={undefined} />
      </Link>
    </Stack>
  );
};

export default SocialMedia;
