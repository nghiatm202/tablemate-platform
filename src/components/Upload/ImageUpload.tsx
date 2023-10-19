"use client";

import { Images } from "@/constants";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import React, { ReactNode, useState } from "react";
import { CTitle, NImage } from "..";

export interface IUploadImageProps {
  onChange?: any;
  value?: any;
  uploadButtonEl?: ReactNode;
}

function ImageUpload() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      console.log("file preview", file.preview);
    }
  };

  return (
    <ImgCrop rotationSlider>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        className="avatar-uploader"
      >
        {/* {fileList.length === 0 && uploadButtonEl} */}
        {fileList.length < 1 && (
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full h-full justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <NImage
                src={Images.LOGO_SYMBOL}
                alt="Tablemate"
                width={54}
                height={54}
                priority
                className="logo-filter mb-2"
              />
              <NImage
                src={Images.TABLEMATE_TEXT}
                alt="Tablemate"
                width={104}
                height={15}
                priority
              />
            </div>

            <div className="avatar-uploader-hover flex items-center gap-1.5 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-4 rounded">
              <span className="text-lg icon-gallery-export text-neutral_800"></span>
              <CTitle
                name="Logo"
                className="text-lg leading-6 text-neutral_800"
              />
            </div>
          </div>
        )}
      </Upload>
    </ImgCrop>
  );
}

export default React.memo(ImageUpload);
