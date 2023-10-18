"use client";

import { locales } from "@/constants";
import { GlobalOutlined, SoundOutlined } from "@ant-design/icons";
import { Select } from "antd";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (value: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: value });
    });
  };

  const getOptionLabel = (locale: string) => {
    let icon;
    if (locale === "en") {
      icon = <GlobalOutlined />;
    } else if (locale === "vi") {
      icon = <SoundOutlined />;
    }

    return (
      <>
        {icon} {t("locale", { locale })}
      </>
    );
  };

  return (
    <label
      className={clsx(
        "relative text-gray-400",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <p className="sr-only">{t("label")}</p>
      <Select
        className="inline-flex appearance-none bg-transparent text-neutral_700"
        value={locale}
        disabled={isPending}
        bordered={false}
        onChange={onSelectChange}
      >
        {locales.map((locale) => (
          <Select.Option key={locale} value={locale}>
            {getOptionLabel(locale)}
          </Select.Option>
        ))}
      </Select>
    </label>
  );
}
