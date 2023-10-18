"use client";

import { Col, Row } from "antd";
import Image from "next/image";
import { Images } from "@/constants";
import { LocaleSwitcher } from "@/components";
// import { withAuth } from "@/hocs";
import "./styles.scss";

interface IProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: IProps) {
  return (
    <Row className="login-wrapper">
      <Col md={12}>
        <Row
          align={"middle"}
          justify={"center"}
          className="h-screen flex justify-center items-center bg-white relative"
        >
          <Col md={10}>{children}</Col>
          <div className="absolute flex gap-6 bottom-10 text-neutral_700 text-sm font-normal">
            <LocaleSwitcher />

            <p className="flex items-center gap-2">
              <span className="text-lg text-main icon-sms" />
              <a href="mailto:hello@tablemate.vn" className="text-neutral_700">
                hello@tablemate.vn
              </a>
            </p>

            <p className="flex items-center gap-2">
              <span className="text-lg text-main icon-call-calling" />
              <span>0329594513</span>
            </p>
          </div>
        </Row>
      </Col>
      <Col md={12} className="overflow-hidden">
        <div className="h-screen w-full overflow-hidden z-[-1] absolute">
          <Image
            src={Images.BANNER}
            alt="banner"
            fill
            className="max-w-none w-full h-screen object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
          />
        </div>
      </Col>
    </Row>
  );
}
