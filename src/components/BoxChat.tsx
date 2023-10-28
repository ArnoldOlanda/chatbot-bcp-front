import React from "react";
import { Header } from "./Header";
import { BoxMesagges } from "./BoxMesagges";
import { Footer } from "./footer";

export const BoxChat = () => {
  return (
    <div className="w-[450px] h-[600px] bg-white rounded-md absolute left-40 bottom-10 shadow-xl overflow-hidden flex flex-col">
      <Header />
      <BoxMesagges />
      <Footer />
    </div>
  );
};
