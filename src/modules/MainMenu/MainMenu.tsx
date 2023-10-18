"use client";

import { NImage } from "@/components";
import { Images } from "@/constants";
import { Menu, MenuProps } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useMemo, useState } from "react";

interface IProps {
  collapsed: boolean;
  href: string;
  children?: ReactNode;
}

export default function MainMenu({ collapsed, href, children }: IProps) {
  const [current, setCurrent] = useState(href);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  const data = useMemo(() => {
    return [
      { title: "Report", image: "report", key: "/home" },
      { title: "Management", image: "management", key: "/home/management" },
      { title: "Menu", image: "menu", key: "/home/menu" },
      { title: "Ads", image: "ads", key: "/home/ads" },
      { title: "Devices", image: "devices", key: "/home/devices" },
    ];
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    router.push(e.key);
  };

  return (
    <>
      <Link
        className={`${
          collapsed ? "px-2" : "px-5"
        } h-[56px] flex items-center my-8`}
        href={href}
      >
        <NImage
          src={Images.LOGO_SYMBOL}
          alt="Tablemate"
          width={56}
          height={56}
          className={`${
            collapsed ? "" : ""
          } duration-300 text-center mx-auto my-8`}
          priority
        />
      </Link>
      {children && children}
      <Menu
        onClick={onClick}
        theme="dark"
        mode="inline"
        selectedKeys={[current]}
      >
        {data.map((menu) => (
          <Menu.Item
            key={menu.key}
            style={{
              height: 90,
              textAlign: "center",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <span
              className={`icon-${menu.image} text-[28px] pt-[15px] block`}
            ></span>
            <span className="text-sm font-semibold">{menu.title}</span>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
}
