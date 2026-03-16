import React, { useRef, useState } from "react";
import Compiler from "../../__molecules/Compiler/Compiler";
import Amy from "../../../assets/images/Amy.svg";
import Max from "../../../assets/images/Max.svg";
import Reply from "../../__atoms/Reply/Reply";
import User from "../../__atoms/User/User";
import Us from "../../../assets/images/Our Pfp.svg";
import Value from "../../__atoms/Reply/Reply";
function Comments() {
  const [OriginalPoster, setOriginalPoster] = useState("amyrobson");
  const [comments, setComments] = useState([]);
  const [Id, setId] = useState(() => {
    return Number(localStorage.getItem("currentId") || 0);
  });
  const [text, setText] = useState("");
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <Compiler
          Id={9999}
          ReplyId={1}
          Ago={"1 Month Ago"}
          Pfp={Amy}
          OriginalPoster={OriginalPoster}
          Text={
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well."
          }
          buttonText={"REPLY"}
        />
        <Compiler
          Id={8888}
          ReplyId={2}
          Text={
            "Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
          }
          Ago={"2 Weeks Ago"}
          Pfp={Max}
          OriginalPoster={"maxblagun"}
          buttonText={"REPLY"}
        />
        {comments.map((comment) => (
          <Compiler
            key={comment.Id}
            Id={comment.Id}
            Text={comment.Text}
            Pfp={Us}
            OriginalPoster={"juliosomo"}
            You={true}
            Ago={"1 Second Ago"}
            TrashClick={() => {
              setComments([...comments, comments.pop()]);
            }}
          />
        ))}
        <Reply
          ReplyVisibilty={true}
          buttonText={"SEND"}
          ReplyClick={(e) => {
            e.preventDefault();
            if (text === "") return;
            setComments([...comments, { Id: Id, Text: text }]);
            setId(Id + 1);
            setText("");
          }}
          onChange={(e) => {
            setText(e.target.value);
          }}
          Value={text}
        />
      </div>
    </>
  );
}

export default Comments;
