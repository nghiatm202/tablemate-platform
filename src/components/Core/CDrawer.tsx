import { Drawer, DrawerProps } from "antd";
import { ReactNode, forwardRef, useImperativeHandle, useState } from "react";

interface IProps extends DrawerProps {
  children: ReactNode;
}

function CDrawer({ children, ...props }: IProps, ref: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      showDrawer,
      closeDrawer,
    }),
    []
  );

  const showDrawer = () => {
    setIsModalOpen(true);
  };

  const closeDrawer = () => {
    setIsModalOpen(false);
  };

  return (
    <Drawer
      open={isModalOpen}
      contentWrapperStyle={{
        padding: 0,
      }}
      bodyStyle={{
        padding: 0,
      }}
      {...props}
    >
      {children}
    </Drawer>
  );
}

export default forwardRef(CDrawer);
