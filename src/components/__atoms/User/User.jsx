import React, { useState } from "react";
import ReplyImg from "../../../assets/images/reply.svg";
import Reply from "../Reply/Reply";
import Like from "../../__atoms/Like/Like";
import Trash from "../../../assets/images/Trash.svg";
import Pen from "../../../assets/images/Pen.svg";

function User({ Pfp, Username, Ago, Text, BtnClick, You, TrashClick }) {
  return (
    <>
      <div className="flex gap-[24px] max-w-[730px] w-full p-[24px] bg-white rounded-[10px]">
        <Like />
        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex justify-between w-full">
            <div className="flex gap-[16px]">
              <img className="w-[32px] h-[32px]" src={Pfp} />
              <h1 className="text-[16px] font-[700] text-[#334253]">
                {Username}
              </h1>
              <div
                className={`flex items-center justify-center w-[36px] h-[19px] bg-[#5357B6] mt-[5px] rounded-[2px] text-[13px] font-[600] text-white ${You ? "" : "hidden"}`}
              >
                you
              </div>
              <span className="text-[#67727E] font-[600] text-[16px]">
                {Ago}
              </span>
            </div>
            <div
              className={`${You ? "" : "hidden"} font-[600] text-[16px] flex gap-[20px]`}
            >
              <div
                onClick={TrashClick}
                className="flex justify-center items-center gap-[8px] cursor-pointer"
              >
                <img className="size-[14px]" src={Trash} alt="" />
                <h1 className="text-[#ED6368]">Delete</h1>
              </div>
              <div className="flex justify-center items-center gap-[8px] cursor-pointer">
                <img className="size-[14px]" src={Pen} alt="" />
                <h1 className="text-[#5357B6]">Edit</h1>
              </div>
            </div>
            <div
              onClick={BtnClick}
              className={`flex gap-[7px] h-[20px] items-center hover:opacity-50 cursor-pointer ${You ? "hidden" : ""}`}
            >
              <img className={`w-[14px] h-[12px] `} src={ReplyImg} />
              <h1 className={`text-[#5357B6] text-[16px] font-[700]`}>Reply</h1>
            </div>
          </div>
          <span className="text-[#67727E] font-[500] text-[16px]">{Text}</span>
        </div>
      </div>
    </>
  );
}

export default User;
