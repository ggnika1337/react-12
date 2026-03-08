import React, { useRef, useState } from "react";
import Compiler from "../../__molecules/Compiler/Compiler";
import Amy from "../../../assets/images/Amy.svg";
import Max from "../../../assets/images/Max.svg";
import Reply from "../../__atoms/Reply/Reply";

function Comments() {
  const [OriginalPoster, setOriginalPoster] = useState("amyrobson");

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <Compiler
          Ago={"1 Month Ago"}
          Pfp={Amy}
          OriginalPoster={OriginalPoster}
          Text={
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well."
          }
        />
        <Compiler
          Text={
            "Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
          }
          Ago={"2 Weeks Ago"}
          Pfp={Max}
          OriginalPoster={"maxblagun"}
        />
        <Reply />
      </div>
    </>
  );
}

export default Comments;
