"use client";

import { CButton } from "@/components";
import { EManagementTab } from "@/constants";
import { Tabs, TabsProps } from "antd";
import dynamic from "next/dynamic";

const WrapperLayout = dynamic(() =>
  import("@/modules").then((mod) => mod.WrapperLayout)
);

import "./styles.scss";

export default function ManagementDashboardPage() {
  const items: TabsProps["items"] = [
    {
      key: EManagementTab.SETTING,
      label: (
        <span className="management-tab-item flex-center bg-neutral_300 text-neutral_800 text-base font-medium py-3 px-[30px] rounded w-full h-full block">
          Setting
        </span>
      ),
      children: <span>setting</span>,
    },
    {
      key: EManagementTab.BRAND,
      label: (
        <span className="management-tab-item flex-center bg-neutral_300 text-neutral_800 text-base font-medium py-3 px-[30px] rounded w-full h-full block">
          Brand
        </span>
      ),
      children: <span>brand</span>,
    },
    {
      key: EManagementTab.TABLE,
      label: (
        <span className="management-tab-item flex-center bg-neutral_300 text-neutral_800 text-base font-medium py-3 px-[30px] rounded w-full h-full block">
          Table
        </span>
      ),
      children: <span>table</span>,
    },
    {
      key: EManagementTab.EMPLOYEE,
      label: (
        <span className="management-tab-item flex-center bg-neutral_300 text-neutral_800 text-base font-medium py-3 px-[30px] rounded w-full h-full block">
          Employee
        </span>
      ),
      children: <span>Employee</span>,
    },
    {
      key: EManagementTab.DEVICE,
      label: (
        <span className="management-tab-item flex-center bg-neutral_300 text-neutral_800 text-base font-medium py-3 px-[30px] rounded w-full h-full block">
          Device
        </span>
      ),
      children: <span>Device</span>,
    },
  ];

  return (
    <WrapperLayout title="Management">
      <div className="spacing-main bg-white management-dashboard">
        <Tabs
          defaultActiveKey="1"
          items={items}
          //   onChange={onChange}
          tabBarStyle={{}}
          //   onTabClick={(key, event) => {
          //     refTab.current?.scrollIntoView({ behavior: "smooth" });
          //   }}
          rootClassName="bg-transparent h-full"
        />
      </div>
    </WrapperLayout>
  );
}
