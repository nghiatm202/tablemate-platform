import { CButton, FloatLabel } from "@/components";
import { useLogin } from "@/hooks";
import { Form, message } from "antd";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

export default function LoginForOwner() {
  const t = useTranslations("LoginPage");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { sendOtpIsLoading, onSendOtpForOwner } = useLogin();

  const onFinish = useCallback(
    (value: TSendOtpForOwnerBody) => {
      onSendOtpForOwner(
        {
          ...value,
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
    [onSendOtpForOwner]
  );

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        name={"phone"}
        rules={[
          { required: true, message: t("phoneNumberIsRequired") },
          {
            pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
            message: "Invalid phone number format",
          },
        ]}
      >
        <FloatLabel
          label="Phone number"
          value=""
          onChange={() => {}}
        ></FloatLabel>
      </Form.Item>

      <CButton
        type="primary"
        className="w-full"
        htmlType="submit"
        style={{ borderRadius: "8px" }}
        loading={sendOtpIsLoading}
        disabled={sendOtpIsLoading}
      >
        {t("continue")}
      </CButton>
    </Form>
  );
}
