import React, { useEffect, useRef, useState } from "react";
import { BoxMesagge } from "./BoxMesagge";

/**
 * Este elemento representa el container que mostrara los las burbujas de mensajes entre el usuario y el chatbot
 * @returns JSX.Element
 */

export const BoxMesagges = ({ messages }: any) => {
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={messageContainerRef}
      className={"flex flex-1 flex-col  py-3 px-3 overflow-y-auto  "}
    >
      {messages.map((e) => (
        <BoxMesagge
          text={`${e.msg}`}
          color={e.rol == "chat" ? "#c9d1f7" : "rgba(217, 217, 217, 1)"}
          sx={{ alignSelf: e.rol == "chat" ? "start" : "end" }}
        />
      ))}
    </div>
  );
};
