import React, { useState } from "react";
import Like from "../../__atoms/Like/Like";
import User from "../../__atoms/User/User";
import Reply from "../../__atoms/Reply/Reply";
import Amy from "../../../assets/images/amyrobson pfp.svg";

function Compiler() {
  const [ReplyVisibilty, setReplyVisibility] = useState(false);

  return (
    <>
      <div className="container flex flex-col items-center gap-[8px]">
        <div className="flex gap-[24px] max-w-[730px] w-full p-[24px] bg-white rounded-[10px]">
          <Like />
          <User
            BtnClick={() => setReplyVisibility(!ReplyVisibilty)}
            Username={"Amyrobson"}
            Pfp={Amy}
            Ago={"1 Month Ago"}
            Text={
              "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well."
            }
          />
        </div>
        <Reply ReplyVisibilty={ReplyVisibilty} />
      </div>
    </>
  );
}

export default Compiler;
