import { MainHeader } from "../MainHeader";

type IProps = {
  renderLeft: React.ReactNode;
} & TLayout;

export default function HomeLayout({ children, renderLeft }: IProps) {
  return (
    <>
      <MainHeader renderLeft={renderLeft} />
      <div className="home-layout">{children}</div>
    </>
  );
}
