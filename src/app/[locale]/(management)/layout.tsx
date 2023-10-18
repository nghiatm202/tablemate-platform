"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import dynamic from "next/dynamic";
// import { withAuth } from "@/hocs";

const MainLayout = dynamic(() =>
  import("@/modules").then((mode) => mode.MainLayout)
);

function ManagementLayout({ children }: TLayout) {
  const segment = useSelectedLayoutSegment();
  return <MainLayout href={`/${segment}`}>{children}</MainLayout>;
}

export default ManagementLayout;
