import React from "react";
import { BoxChat } from "./BoxChat";

export function Chat() {
  const imageURL = "/src/assets/bg.png";

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div
        className="bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <BoxChat />
      </div>
    </div>
  );
}
