import React from "react";

/**
 * Este elemento representa el cuerpo de la burbuja de los mensajes
 * @returns JSX.Element
 */

interface Props {
  text: string;
  color: string;
  sx: object;
}

export const BoxMesagge = ({ color, text, sx }: Props) => {
  return (
    <div
      className={`flex max-w-[300px] rounded-md px-3 py-1 items-center mb-3  `}
      style={{ background: color, ...sx }}
    >
      <p>{text}</p>
    </div>
  );
};
