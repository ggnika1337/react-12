import React from "react";

function Delete({ Ref, Delete, Cancel }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/50">
        <div
          ref={Ref}
          className="w-[400px] h-[252px] p-[32px] bg-white flex flex-col gap-[20px] rounded-[8px] fixed inset-0 m-auto"
        >
          <h1 className="text-[#334253] font-[600] text-[24px]">
            Delete comment
          </h1>
          <span className="text-[#67727E] font-[600] text-[16px]">
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
          </span>
          <div className="flex gap-[14px]">
            <button
              onClick={Cancel}
              className="w-full h-[48px] bg-[#67727E] rounded-[8px] font-[600] text-white cursor-pointer"
            >
              NO, CANCEL
            </button>
            <button
              onClick={Delete}
              className="w-full h-[48px] bg-[#ED6368] rounded-[8px] font-[600] text-white cursor-pointer"
            >
              YES, DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delete;
