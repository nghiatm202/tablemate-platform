"use client";

import dynamic from "next/dynamic";

const WrapperLayout = dynamic(() =>
  import("@/modules").then((mod) => mod.WrapperLayout)
);

export default function ReportDashboardPage() {
  return (
    <WrapperLayout title="Report">
      <div className="spacing-main">report</div>
    </WrapperLayout>
  );
}
