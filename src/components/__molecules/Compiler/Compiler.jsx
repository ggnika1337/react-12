import React, { useEffect, useRef, useState } from "react";
import User from "../../__atoms/User/User";
import Reply from "../../__atoms/Reply/Reply";
import Us from "../../../assets/images/Our Pfp.svg";
import Delete from "../../__atoms/Delete/Delete";
import Line from "../../__atoms/Line/Line";

function Compiler({ OriginalPoster, Pfp, Ago, Text, TrashClick, Id, ReplyId }) {
  const [ReplyVisibilty, setReplyVisibility] = useState(false);
  const [text, setText] = useState(localStorage.getItem("reply"));
  const [replies, setReplies] = useState([]);

  const boxEl = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  function handleOutsideClick(event) {
    if (boxEl.current && !boxEl.current.contains(event.target)) {
      setIsVisible(false);
    }
  }

  document.addEventListener("mousedown", handleOutsideClick);

  return (
    <>
      <div className="container flex flex-col items-center gap-[8px]">
        <User
          BtnClick={() => setReplyVisibility(!ReplyVisibilty)}
          Username={OriginalPoster}
          You={false}
          Pfp={Pfp}
          Ago={Ago}
          Text={Text}
          Id={Id}
        />
        <Reply
          TagOP={"@" + OriginalPoster + " "}
          ReplyVisibilty={ReplyVisibilty}
          ReplyClick={(e) => {
            e.preventDefault();
            setReplies([...replies, replies.length + 1]);
            setReplyVisibility(false);
          }}
          onChange={(e) => {
            setText(e.target.value);
            localStorage.setItem(`reply_${ReplyId}`, e.target.value);
          }}
        />
        <div className="w-full flex pl-[40px] gap-[40px]">
          <Line />
          <div className="gap-[24px] flex flex-col w-full">
            {replies.map((id, key) => (
              <User
                Id={Id}
                key={key}
                You={true}
                Username={"juliusomo"}
                Text={text}
                Pfp={Us}
                id={id}
                TrashClick={() => {
                  setIsVisible(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {isVisible && (
        <Delete
          Delete={() => {
            setIsVisible(false);
            localStorage.removeItem(`reply_${ReplyId}`);
          }}
          Cancel={() => {
            setIsVisible(false);
          }}
          Ref={boxEl}
        />
      )}
    </>
  );
}

export default Compiler;
