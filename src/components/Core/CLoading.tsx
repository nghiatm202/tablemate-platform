import { memo } from "react";
import { Spin } from "antd";

function CLoading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Spin />
    </div>
  );
}

export default memo(CLoading);
