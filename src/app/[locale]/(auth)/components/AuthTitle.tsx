import { CTypography } from "@/components";
import { Images } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AuthTitle() {
  const t = useTranslations("LoginPage");

  return (
    <>
      <Image
        src={Images.LOGO}
        alt="Tablemate"
        height={48}
        width={180}
        priority
        className="mb-11 mx-auto"
      />
      <CTypography name={t("title")} level={3} className="text-center" />
    </>
  );
}
