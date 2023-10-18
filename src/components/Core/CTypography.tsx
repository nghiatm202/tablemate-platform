import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";

interface IProps extends TitleProps {
  name: string;
}

export default function CTypography({ name, ...props }: IProps) {
  return <Typography.Title {...props}>{name}</Typography.Title>;
}
