"use client";

import React, { PropsWithChildren } from "react";
import { ConfigProvider } from "antd";
import { RootStyleRegistry } from ".";

export function AntdStyleProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ED5700",
          colorLink: "#ED5700",
          borderRadius: 0,
          controlHeight: 40,
          fontSize: 14,
          colorError: "#D14343",
          colorBgTextHover: "#D9E6FF",
          controlInteractiveSize: 16,
          paddingContentVerticalLG: 12,
          padding: 12,
        },
        components: {
          Menu: {
            darkItemBg: "#2E2E2E",
            darkItemSelectedBg: "#434343",
            itemHeight: 40,
            dangerItemActiveBg: "#eee",
            dangerItemHoverColor: "#eee",
            itemHoverColor: "#FF0000",
            itemHoverBg: "#FF0000",
          },
          Pagination: {
            itemActiveBg: "#D9E6FF",
            itemSize: 30,
          },
        },
      }}
    >
      <RootStyleRegistry>{children}</RootStyleRegistry>
    </ConfigProvider>
  );
}
