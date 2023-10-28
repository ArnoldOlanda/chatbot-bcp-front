import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { BoxMesagges } from "./BoxMesagges";
import { Footer } from "./footer";
import { useCompletion } from "../hooks/useCompletion";
/**
 * Este elemento represeta en cuerpo de la caja del chatbot
 * @returns JSX.Element
 */

export const BoxChat = () => {
  const [messages, setMessages] = useState([
    {
      rol: "chat",
      msg: "¡Hola Gabriel! Bienvenido a nuestro servicio de atención al cliente. Estoy aquí para ayudarte en todo lo que necesites. ¿En qué puedo asistirte hoy?",
    },
  ]);

  const [count, setCount] = useState(0);

  const addMessages = (prompt: { rol: string; msg: string }) => {
    setMessages([...messages, prompt]);
  };

  const { handleClickSend, loading, data } = useCompletion();

  useEffect(() => {
    if (!loading && data) {
      setCount(count + 1);
      addMessages({
        rol: "chat",
        msg: data?.getCompletion.content,
      });
    }
  }, [data]);

  return (
    <div className="w-[450px] h-[600px] bg-white rounded-md absolute left-[125px] bottom-10 shadow-xl overflow-hidden flex flex-col">
      <Header count={count} />
      <BoxMesagges messages={messages} />
      <Footer
        handleClickSend={handleClickSend}
        addMessages={addMessages}
        loading={loading}
      />
    </div>
  );
};
