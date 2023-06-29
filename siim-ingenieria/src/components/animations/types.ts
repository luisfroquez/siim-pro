import { MotionStyle, TargetAndTransition, VariantLabels } from "framer-motion";
import { Key, ReactNode } from "react";

export interface AnimationBaseProps {
  id?: string;
  key?: Key | null;
  children: ReactNode;
  duration?: number;
  delay?: number;
  distance?: number;
  className?: string;
  style?: MotionStyle;
  exit?: VariantLabels | TargetAndTransition;
}

export interface SlideInProps extends AnimationBaseProps {
  direction?: "toRight" | "toLeft" | "toUp" | "toDown";
}
