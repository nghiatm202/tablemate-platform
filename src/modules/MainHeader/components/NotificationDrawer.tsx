import { Ref, forwardRef, useRef } from "react";
import { CDrawer } from "@/components";
import { Images } from "@/constants";
// import { CTitle } from "ui";

function NotificationDrawer(
  { onClose, onOpen }: TAcionDrawer,
  ref: Ref<TDrawerRef>
) {
  return (
    <>
      <div
        className="bg-neutral_75 flex items-center cursor-pointer rounded-full w-[40px] h-[40px] justify-center group"
        onClick={onOpen}
      >
        <span className="icon-bell text-lg group-hover:text-main" />
      </div>
      <CDrawer
        ref={ref}
        width={360}
        closeIcon={
          <div className="flex items-center justify-between w-[312px]">
            {/* <CTitle name="Notifications" title1 /> */}
            <p>Noti</p>
            <span className="icon-close" />
          </div>
        }
        maskStyle={{
          background: "transparent",
        }}
        rootStyle={{
          top: 90,
        }}
        onClose={onClose}
      >
        <div className="content-center-drawer">
          {/* <VSImage
            src={Images.NOTI_EMPTY}
            alt="Noti empty image"
            width={100}
            height={100}
            priority
            className="w-auto h-auto mb-2"
          /> */}
          {/* <CTitle name="You're all caught up" title2 regular /> */}
          {/* <CTitle name="No new notifications" title2 regular /> */}
          <p>You all caught up</p>
        </div>
      </CDrawer>
    </>
  );
}
export default forwardRef(NotificationDrawer);
