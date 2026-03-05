import React, { useState } from "react";
import ReplyImg from "../../../assets/images/reply.svg";
import Reply from "../Reply/Reply";

function User({ Pfp, Username, Ago, Text, BtnClick }) {
  return (
    <>
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-between w-full">
            <div className="flex gap-[16px]">
              <img className="w-[32px] h-[32px]" src={Pfp} />
              <h1 className="text-[16px] font-[700] text-[#334253]">
                {Username}
              </h1>
              <span className="text-[#67727E] font-[600] text-[16px]">
                {Ago}
              </span>
            </div>
            <div
              onClick={BtnClick}
              className="flex gap-[7px] h-[20px] items-center hover:opacity-50 cursor-pointer "
            >
              <img className="w-[14px] h-[12px] " src={ReplyImg} />
              <h1 className="text-[#5357B6] text-[16px] font-[700] ">Reply</h1>
            </div>
          </div>
          <span className="text-[#67727E] font-[500] text-[16px]">{Text}</span>
        </div>
      </div>
    </>
  );
}

export default User;
