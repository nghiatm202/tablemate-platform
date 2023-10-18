import { ReactNode } from "react";

type TProps = {
  title: string;
  renderLeft?: ReactNode;
  renderRight?: ReactNode;
  isNodata?: boolean;
  textEmpty?: string;
} & TLayout;

export default function WrapperLayout({
  children,
  title,
  renderLeft,
  renderRight,
  isNodata,
  textEmpty,
}: TProps) {
  return (
    <>
      {/* {renderLeft ? (
        <div className="spacing-main flex-space-between header-menu !bg-white">
          {renderLeft}
          {renderRight && renderRight}
        </div>
      ) : (
        <SubHeader title={title} renderRight={renderRight} />
      )} */}

      {isNodata ? (
        // <div className="wrapper-empty">
        //   <VSImage
        //     src={Images.FEATURE_DEVELOP}
        //     alt="Image No Data"
        //     width={148}
        //     height={148}
        //   />
        //   <CTitle
        //     name={textEmpty ?? "Feature in development. Please wait more time!"}
        //     title3
        //   />
        // </div>
        <p>Feature in development. Please wait more time!</p>
      ) : (
        <div className="wrapper-body">{children}</div>
      )}
    </>
  );
}
