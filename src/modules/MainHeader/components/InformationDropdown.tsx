import { Avatar } from "antd";

export default function InformationDropdown() {
  return (
    <>
      <a onClick={(e) => e.preventDefault()}>
        <Avatar className="!bg-blue_200 !text-blue_500 !w-[32px] !h-[32px] !flex items-center justify-center">
          {"N"}
        </Avatar>
      </a>
    </>
  );
}
