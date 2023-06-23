import { cloneElement } from "react";

import _ from "lodash";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement;
  size?: "sm";
}

function Button(props: Props) {
  const { icon, size } = props;

  const handleSize = () => {
    switch (size) {
      case "sm":
        return "h-6 w-6";
      default:
        return "h-8 w-8";
    }
  };

  return (
    <button
      {..._.omit(props, ["icon", "size"])}
      className={`grid ${handleSize()} flex-shrink-0 cursor-default place-items-center rounded-lg bg-black/5 transition-all hover:bg-black/10 disabled:opacity-50`}
    >
      {icon && cloneElement(icon)}
    </button>
  );
}

export default Button;
