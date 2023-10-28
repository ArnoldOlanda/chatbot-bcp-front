import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex-0 bg-[#161A79] h-[70px] flex items-center px-5 text-white font-bold justify-between ">
      <h3>ChatB</h3>
      <div className="flex items-center gap-1">
        <p>{count}</p>
        <div
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <AiFillStar color={"gold"} size={"25px"} />
        </div>
      </div>
    </div>
  );
};
