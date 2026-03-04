import React from "react";
import Like from "../../__atoms/Like/Like";
import User from "../../__atoms/User/User";

function Comment() {
  return (
    <>
      <div className="flex max-w-[730px] h-[167px]  w-full p-[24px]">
        <Like />
        <User Username={"Amyrobson"} Pfp={123} Ago={"1 Month Ago"} />
      </div>
    </>
  );
}

export default Comment;
