import classnames from "classnames";
import { ReactNode } from "react";

interface IProps {
  name?: string | number;
  medium?: boolean;
  semibold?: boolean;
  bold?: boolean;
  regular?: boolean;
  className?: string;
  main?: boolean;
  neutral900?: boolean;
  white?: boolean;
  neutral700?: boolean;
  neutral300?: boolean;
  xxlSemi?: boolean;
  smNormal?: boolean;
  children?: ReactNode;
}

export default function CTitle({
  name,
  className,
  main,
  regular,
  neutral900,
  medium,
  semibold,
  bold,
  white,
  neutral700,
  neutral300,
  xxlSemi,
  smNormal,
  children,
}: IProps) {
  return (
    <p
      className={classnames(
        {
          "!text-2xl !font-semibold": xxlSemi,
          "!text-sm !font-normal": smNormal,
          "!text-main": main,
          "!font-normal": regular,
          "!font-medium": medium,
          "!font-semibold": semibold,
          "!font-bold": bold,
          "!text-neutral_300": neutral300,
          "!text-neutral_700": neutral700,
          "!text-neutral_900": neutral900,
          "!text-white": white,
        },
        className
      )}
    >
      {children ? children : name}
    </p>
  );
}
