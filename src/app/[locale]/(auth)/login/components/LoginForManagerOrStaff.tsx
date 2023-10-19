import { CButton, FloatLabel } from "@/components";
import { useLogin } from "@/hooks";
import { Form } from "antd";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

export default function LoginForManagerOrStaff() {
  const t = useTranslations("LoginPage");
  const [brandCode, setBrandCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { loginIsLoading, onLoginForOwner } = useLogin();

  const onFinish = useCallback((value: any) => {
    console.log("value", value);
  }, []);

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        name={"brandCode"}
        rules={[{ required: true, message: t("brandCodeIsRequired") }]}
      >
        <FloatLabel
          label="Brand Code"
          value=""
          onChange={() => {}}
        ></FloatLabel>
      </Form.Item>

      <Form.Item
        name={"phone"}
        rules={[{ required: true, message: t("phoneNumberIsRequired") }]}
      >
        <FloatLabel
          label="Phone number"
          value=""
          onChange={() => {}}
        ></FloatLabel>
      </Form.Item>

      {/* <Form.Item
        name={"phone"}
        rules={[
          { required: true, message: t("phoneNumberIsRequired") },
          {
            pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
            message: "Invalid phone number format",
          },
        ]}
      >
        <Input />
      </Form.Item> */}

      <CButton
        type="primary"
        className="w-full"
        htmlType="submit"
        style={{ borderRadius: "8px" }}
        loading={loginIsLoading}
        disabled={loginIsLoading}
      >
        {t("continue")}
      </CButton>
    </Form>
  );
}
