import React, { useEffect, useRef } from "react";
import { BoxMesagge } from "./BoxMesagge";

export const BoxMesagges = () => {
  const flujo = [
    {
      rol: "chat",
      msg: "mensaje1",
    },
    {
      rol: "person",
      msg: "mensaje2",
    },
    {
      rol: "chat",
      msg: "mensaje1",
    },
    {
      rol: "person",
      msg: "mensaje2",
    },
    {
      rol: "chat",
      msg: "mensaje1",
    },
    {
      rol: "person",
      msg: "mensaje2",
    },
    {
      rol: "chat",
      msg: "mensaje1",
    },
    {
      rol: "person",
      msg: "mensaje2",
    },
    {
      rol: "chat",
      msg: "mensaje1",
    },
    {
      rol: "person",
      msg: "mensaje2",
    },
    {
      rol: "chat",
      msg: "mensaje1",
    },
    {
      rol: "person",
      msg: "mensaje2",
    },
  ];

  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [flujo]);

  return (
    <div
      ref={messageContainerRef}
      className={"flex flex-1 flex-col  py-3 px-3 overflow-y-auto  "}
    >
      {flujo.map((e) => (
        <BoxMesagge
          text={`${e.msg}`}
          color={e.rol == "chat" ? "white" : "rgba(217, 217, 217, 1)"}
          sx={{ alignSelf: e.rol == "chat" ? "start" : "end" }}
        />
      ))}
    </div>
  );
};
