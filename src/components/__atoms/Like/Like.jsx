import React, { useEffect, useState } from "react";
import Minus from "../../../assets/images/minus.svg";
import Plus from "../../../assets/images/plus.svg";

function Like({ Id }) {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem(`like_${Id}`) || 0);
  });

  function dislike() {
    setCount(count - 1);
    if (count === 0) {
      setCount(count - 0);
    }
    // localStorage.setItem(`like_${Id}`, count);
  }

  function like() {
    setCount(count + 1);
    // localStorage.setItem(`like_${Id}`, count);
  }

  useEffect(() => {
    localStorage.setItem(`like_${Id}`, count);
  }, [count]);

  return (
    <>
      <div className="rounded-[10px] min-w-[40px] flex items-center justify-center flex-col gap-[20px] bg-[#F5F6FA] py-[12px] px-[3px] max-md:flex-row max-md:h-[40px] max-md:w-[100px]">
        <button onClick={like}>
          <img className="opacity-50 hover:opacity-100" src={Plus} alt="" />
        </button>

        <h1 className="text-[rgba(83,87,182,1)] text-[16px] font-[700]">
          {count}
        </h1>
        <button onClick={dislike}>
          <img className="opacity-50 hover:opacity-100" src={Minus} alt="" />
        </button>
      </div>
    </>
  );
}

export default Like;
