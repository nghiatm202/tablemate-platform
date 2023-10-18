import type { MenuProps } from "antd/es/menu";

type MenuItem = Required<MenuProps>["items"][number];

export const getMenuItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
) =>
  ({
    key,
    icon,
    children,
    label,
  } as MenuItem);
