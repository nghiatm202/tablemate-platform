"use client";

import dynamic from "next/dynamic";

const WrapperLayout = dynamic(() =>
  import("@/modules").then((mod) => mod.WrapperLayout)
);

export default function MenuDashboardPage() {
  return (
    <WrapperLayout title="Menu">
      <div className="spacing-main">menu</div>
    </WrapperLayout>
  );
}
