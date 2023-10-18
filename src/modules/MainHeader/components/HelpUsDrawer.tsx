import { Ref, forwardRef } from "react";
import { Empty } from "antd";
import { CDrawer } from "@/components";

function HelpUsDrawer({ onClose, onOpen }: TAcionDrawer, ref: Ref<TDrawerRef>) {
  return (
    <>
      <div className="bg-neutral_75 cursor-pointer rounded-full w-[40px] h-[40px] justify-center flex items-center group" onClick={onOpen}>
        <span className="icon-question-circle text-lg group-hover:text-main" />
      </div>
      <CDrawer
        ref={ref}
        width={360}
        maskStyle={{
          background: "transparent",
        }}
        rootStyle={{
          top: 90,
        }}
        closeIcon={
          <div className="flex items-center justify-between w-[312px]">
            {/* <CTitle name="Help" title1 /> */}
            <p>Help</p>
            <span className="icon-close" />
          </div>
        }
        onClose={onClose}
      >
        <div className="flex items-center justify-center h-full">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      </CDrawer>
    </>
  );
}

export default forwardRef(HelpUsDrawer);
