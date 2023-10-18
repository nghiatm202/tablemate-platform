"use client";

import { CButton } from "@/components";
import { Form, message } from "antd";
import { InputOTP } from "antd-input-otp";
import { useTranslations } from "next-intl";
import { useCallback } from "react";
import { useLogin } from "@/hooks";
import { useAuthStore } from "@/store";
import dynamic from "next/dynamic";
import { AuthTitle } from "../../components";
import "./styles.scss";

const CTitle = dynamic(() => import("@/components").then((mod) => mod.CTitle), {
  ssr: false,
});

export default function LoginOTPPage() {
  const t = useTranslations("LoginPage");

  const [form] = Form.useForm();
  const userInfo = useAuthStore((state) => state?.userInfo);
  const { loginIsLoading, onLoginForOwner } = useLogin();

  const onFinish = useCallback(
    (values: any) => {
      console.log("values", values);
      const { otp } = values;
      if (!otp || otp.includes(undefined) || otp.includes("") || otp.length < 6)
        return form.setFields([
          {
            name: "otp",
            errors: ["OTP is invalid"],
          },
        ]);
      onLoginForOwner(
        {
          phone: userInfo?.phone,
          secret: otp.join(""),
        },
        (error) => {
          message.open({
            type: "error",
            content: error,
            className: "error-message-custom",
          });
        }
      );
    },
    [form, onLoginForOwner, userInfo.phone]
  );

  return (
    <Form form={form} onFinish={onFinish}>
      <AuthTitle />

      <div className="text-base text-center text-neutral_900 mb-6">
        The OTP code has been sent to phone number{" "}
        <CTitle name={userInfo?.phone} semibold />
      </div>

      <Form.Item
        name="otp"
        className="center-error-message"
        rules={[{ validator: async () => Promise.resolve() }]}
      >
        <InputOTP autoFocus inputType="numeric" length={6} />
      </Form.Item>

      <p className="text-sm text-[#0D0E11] text-center mb-6">
        Did not receive the OTP? <span className="text-main">Resend</span>{" "}
      </p>

      <Form.Item noStyle>
        <CButton
          type="primary"
          className="w-full"
          htmlType="submit"
          style={{ borderRadius: "8px" }}
          loading={loginIsLoading}
          disabled={loginIsLoading}
        >
          {t("confirm")}
        </CButton>
      </Form.Item>
    </Form>
  );
}
