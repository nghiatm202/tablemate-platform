"use client";
import { Divider, Layout } from "antd";
import dynamic from "next/dynamic";
import { useCallback, useMemo, useState } from "react";
import { MainHeader, MainMenu } from "@/modules";
import { usePathname } from "next/navigation";
const { Sider, Content } = Layout;

// const CTitle = dynamic(() => import("ui").then((mod) => mod.CTitle), {
//   ssr: false,
// });

type IProps = {
  href: string;
} & TLayout;

export default function MainLayout({ children, href }: IProps) {
  //   const { userInfo } = useAuthStore((state) => state);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const pathname = usePathname();

  const data = useMemo(() => {
    return [
      { title: "Report", image: "report", key: "/home" },
      { title: "Management", image: "management", key: "/home/management" },
      { title: "Menu", image: "menu", key: "/home/menu" },
      { title: "Ads", image: "ads", key: "/home/ads" },
      { title: "Devices", image: "devices", key: "/home/devices" },
    ];
  }, []);

  const renderLeft = useCallback(
    () => (
      <div className="flex items-center">
        {/* <span
          className={`${
            collapsed ? "icon-sidebar-right" : "icon-sidebar-left"
          } text-xl cursor-pointer`}
          onClick={() => setCollapsed(!collapsed)}
        /> */}
        {/* <CTitle name={"Wellcome, " + userInfo?.fullName} title3 neutral900 /> */}
        <p className="text-2xl font-semibold text-neutral_900">
          {data.find((item) => item.key === pathname)?.title || "Default Title"}
        </p>
      </div>
    ),
    [pathname, data]
  );

  return (
    <Layout className="main-layout">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="!bg-neutral_900"
        collapsedWidth={60}
        width={120}
      >
        <MainMenu collapsed={collapsed} href={href} />
      </Sider>
      <Layout>
        <MainHeader renderLeft={renderLeft()} />
        <Content className="main-content">{children}</Content>
      </Layout>
    </Layout>
  );
}
