import React from "react";

interface Props {
  text: string;
  color: string;
  sx: object;
}

export const BoxMesagge = ({ color, text, sx }: Props) => {
  return (
    <div
      className={`flex min-h-[40px] max-w-[300px] rounded-md px-3 py-1 items-center mb-3  `}
      style={{ background: color, ...sx, border: "1px gray solid" }}
    >
      <b>{text}</b>
    </div>
  );
};
