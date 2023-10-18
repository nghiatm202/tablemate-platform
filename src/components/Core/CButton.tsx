"use client";

import { ReactNode } from "react";
import { Button, ButtonProps } from "antd";

interface IProps extends ButtonProps {
  children: ReactNode;
}

export default function CButton({ children, ...props }: IProps) {
  return <Button {...props}>{children}</Button>;
}
