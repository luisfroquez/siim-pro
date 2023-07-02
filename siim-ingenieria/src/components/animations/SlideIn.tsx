import { motion } from "framer-motion";
import { SlideInProps } from "./types";

const SlideIn = ({
  id,
  key,
  children,
  duration = 1,
  delay = 0,
  distance = 50,
  className,
  style,
  direction = "toRight",
}: SlideInProps) => {
  let initial, animate;

  switch (direction) {
    case "toLeft":
      initial = { x: distance, opacity: 0 };
      animate = { x: 0, opacity: 1 };
      break;

    case "toUp":
      initial = { y: distance, opacity: 0 };
      animate = { y: 0, opacity: 1 };
      break;

    case "toDown":
      initial = { y: -distance, opacity: 0 };
      animate = { y: 0, opacity: 1 };
      break;

    default:
      initial = { x: -distance, opacity: 0 };
      animate = { x: 0, opacity: 1 };
      break;
  }

  return (
    <motion.div
      id={id}
      key={key}
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      initial={initial}
      whileInView={animate}
      exit={initial}
      transition={{ duration: duration, delay: delay, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
