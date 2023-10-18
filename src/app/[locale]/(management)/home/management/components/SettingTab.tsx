import { FloatLabel } from "@/components";
import { Form } from "antd";
import { useTranslations } from "next-intl";
import { useState } from "react";

import "./styles.scss";

export default function SettingTab() {
  const t = useTranslations("LoginPage");
  const [brandCode, setBrandCode] = useState("");

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <Form layout="vertical">
          <div className="grid grid-cols-2 gap-6">
            <Form.Item
              name={"id"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="ID"
                value={brandCode}
                onChange={(newValue: string) => setBrandCode(newValue)}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"brandCode"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Code"
                value={brandCode}
                onChange={(newValue: string) => setBrandCode(newValue)}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"brandName"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Brand Name"
                value={brandCode}
                onChange={(newValue: string) => setBrandCode(newValue)}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"currency"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Default Currency"
                value={brandCode}
                onChange={(newValue: string) => setBrandCode(newValue)}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"registrationDate"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Registration date"
                value={brandCode}
                onChange={(newValue: string) => setBrandCode(newValue)}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"companyName"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Company Name"
                value={brandCode}
                onChange={(newValue: string) => setBrandCode(newValue)}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"taxId"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Tax Id"
                value={brandCode}
                onChange={(newValue: string) => setBrandCode(newValue)}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"address"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Company Registration Address"
                value={brandCode}
                onChange={(newValue: string) => setBrandCode(newValue)}
              ></FloatLabel>
            </Form.Item>
          </div>
        </Form>
      </div>

      <div className="col-span-4"></div>
    </div>
  );
}
