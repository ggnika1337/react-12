import React from "react";
import Compiler from "../../__molecules/Compiler/Compiler";

function Comments() {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <Compiler />
        <Compiler />
      </div>
    </>
  );
}

export default Comments;
