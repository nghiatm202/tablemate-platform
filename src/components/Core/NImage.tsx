import React from "react";
import Image, { ImageProps } from "next/image";

export default function NImage({ src, alt, ...props }: ImageProps) {
  return <Image src={src} alt={alt} priority {...props} />;
}
