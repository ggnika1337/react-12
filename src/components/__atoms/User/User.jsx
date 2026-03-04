import React from "react";
import Reply from "../../../assets/images/reply.svg";

function User({ Pfp, Username, Ago }) {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <img className="size-32px" src={Pfp} />
          <h1 className="text-[16px] font-[400] text-[#334253]">{Username}</h1>
          <span className="text-[#67727E] font-[400] text-[16px]">{Ago}</span>
        </div>
        <div className="flex gap-[7px] h-[44px] items-center hover:opacity-50 cursor-pointer ">
          <img className="w-[14px] h-[12px] " src={Reply} />
          <h1 className="text-[#5357B6] text-[16px] font-[700] ">Reply</h1>
        </div>
      </div>
    </>
  );
}

export default User;
