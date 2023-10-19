import { Input } from "antd";
import { memo, useState } from "react";

import "./styles.scss";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const FloatLabel = (props: Props) => {
  const [focus, setFocus] = useState(false);
  const { label, value } = props;

  const labelClass =
    focus || (value && value.length !== 0) ? "label label-float" : "label";

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <Input value={value} onChange={(e) => props.onChange(e.target.value)} />
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default memo(FloatLabel);
