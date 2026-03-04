import React, { useState } from "react";
import Minus from "../../../assets/images/minus.svg";
import Plus from "../../../assets/images/plus.svg";

function Like() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="rounded-[10px] flex items-center justify-center flex-col gap-[20px] bg-[#F5F6FA] py-[12px] px-[3px]">
        <button onClick={() => setCount(count + 1)}>
          <img className="opacity-50 hover:opacity-100" src={Plus} alt="" />
        </button>

        <h1 className="text-[rgba(83,87,182,1)] text-[16px] font-[700]">
          {count}
        </h1>
        <button
          onClick={() => {
            setCount(count - 1);
            if (count === 0) {
              setCount(count - 0);
            }
          }}
        >
          <img className="opacity-50 hover:opacity-100" src={Minus} alt="" />
        </button>
      </div>
    </>
  );
}

export default Like;
