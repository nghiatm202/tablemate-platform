"use client";

import { useRef } from "react";
import {
  HelpUsDrawer,
  InformationDropdown,
  NotificationDrawer,
} from "./components";

export default function MainHeader({ renderLeft }: THeader) {
  const notiRef = useRef<TDrawerRef>(null);
  const helpRef = useRef<TDrawerRef>(null);

  return (
    <div className="h-[90px] px-10 p-2 bg-white flex items-center justify-between border-b border-neutral_300">
      <div className="main-header__left">{renderLeft}</div>
      <div className="flex items-center gap-2">
        {/* <MenuHeaderDropdown /> */}
        <NotificationDrawer
          ref={notiRef}
          onClose={() => notiRef?.current?.closeDrawer()}
          onOpen={() => {
            notiRef?.current?.showDrawer();
            helpRef?.current?.closeDrawer();
          }}
        />
        <HelpUsDrawer
          ref={helpRef}
          onClose={() => helpRef?.current?.closeDrawer()}
          onOpen={() => {
            helpRef?.current?.showDrawer();
            notiRef?.current?.closeDrawer();
          }}
        />
        <InformationDropdown />
      </div>
    </div>
  );
}
