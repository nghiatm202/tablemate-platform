"use client";

import { Tabs } from "antd";
import { useMemo } from "react";

import { AuthTitle } from "../components";
import { LoginForManagerOrStaff, LoginForOwner } from "./components";
import "./styles.scss";

export default function LoginPage() {
  const items = useMemo(
    () => [
      {
        label: "Owner",
        key: "owner",
        children: <LoginForOwner />,
      },
      {
        label: "Manager/Staff",
        key: "managerOrStaff",
        children: <LoginForManagerOrStaff />,
      },
    ],
    []
  );

  return (
    <>
      <AuthTitle />

      <Tabs
        destroyInactiveTabPane
        items={items}
        indicatorSize={(origin) => origin / 3}
        centered
        className="login-tabs"
      />
    </>
  );
}
