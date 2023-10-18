"use client";

import dynamic from "next/dynamic";

const WrapperLayout = dynamic(() =>
  import("@/modules").then((mod) => mod.WrapperLayout)
);

export default function DevicesDashboardPage() {
  return (
    <WrapperLayout title="Devices">
      <div className="spacing-main">devices</div>
    </WrapperLayout>
  );
}
