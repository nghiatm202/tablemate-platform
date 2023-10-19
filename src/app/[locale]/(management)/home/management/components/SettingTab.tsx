import { CButton, CTitle, FloatLabel, ImageUpload } from "@/components";
import { Form } from "antd";
import { useTranslations } from "next-intl";
import { useCallback } from "react";

import "./styles.scss";

export default function SettingTab() {
  const t = useTranslations("LoginPage");

  const onFinish = useCallback((value: any) => {
    console.log("value", value);
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 pr-10 pt-6">
        <div className="mb-6 flex items-center justify-between">
          <CTitle name="Merchant information" neutral900 lgSemi />
          <CButton className="!flex items-center gap-1.5 !border-main">
            <span className="icon-edit text-lg text-main"></span>
            <CTitle name="Edit" className="text-base font-medium" main />
          </CButton>
        </div>
        <Form layout="vertical" onFinish={onFinish}>
          <div className="grid grid-cols-2 gap-6">
            <Form.Item
              name={"id"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel label="ID" value="" onChange={() => {}}></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"brandCode"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Code"
                value=""
                onChange={() => {}}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"brandName"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Brand Name"
                value=""
                onChange={() => {}}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"currency"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Default Currency"
                value=""
                onChange={() => {}}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"registrationDate"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Registration date"
                value=""
                onChange={() => {}}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"companyName"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Company Name"
                value=""
                onChange={() => {}}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"taxId"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Tax Id"
                value=""
                onChange={() => {}}
              ></FloatLabel>
            </Form.Item>
            <Form.Item
              name={"address"}
              rules={[{ required: true, message: t("brandCodeIsRequired") }]}
            >
              <FloatLabel
                label="Company Registration Address"
                value=""
                onChange={() => {}}
              ></FloatLabel>
            </Form.Item>
          </div>
        </Form>
      </div>

      <div className="col-span-4 bg-neutral_50 px-10 py-6">
        <CTitle name="Logo" neutral900 xlSemi className="mb-6" />
        <ImageUpload />
      </div>
    </div>
  );
}
