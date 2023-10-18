"use client";

import dynamic from "next/dynamic";

const WrapperLayout = dynamic(() =>
  import("@/modules").then((mod) => mod.WrapperLayout)
);

export default function AdsDashboardPage() {
  return (
    <WrapperLayout title="Ads">
      <div className="spacing-main">ads</div>
    </WrapperLayout>
  );
}
