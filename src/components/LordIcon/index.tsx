import { defineElement } from "lord-icon-element";

import lottie from "lottie-web";

defineElement(lottie.loadAnimation);

export type LordIconTrigger =
  | "hover"
  | "click"
  | "loop"
  | "loop-on-hover"
  | "morph"
  | "morph-two-way";

export type LordIconColors = {
  primary?: string;
  secondary?: string;
};

export type LordIconProps = {
  src?: string;
  trigger?: LordIconTrigger;
  colors?: LordIconColors;
  delay?: number;
  size?: number;
};

const LordIcon = ({ colors, src, size, trigger, delay }: LordIconProps) => (
  <lord-icon
    colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
    delay={delay}
    src={src}
    style={{
      width: size,
      height: size,
    }}
    trigger={trigger}
  />
);

export default LordIcon;
