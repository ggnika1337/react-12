import React, { useEffect, useState } from "react";
import Us from "../../../assets/images/Our Pfp.svg";

function Reply({ ReplyVisibilty, TagOP, ReplyClick, onChange }) {
  const [isVisible, setIsVisible] = useState(ReplyVisibilty);

  useEffect(() => {
    setIsVisible(ReplyVisibilty);
  }, [ReplyVisibilty]);
  return (
    <>
      <div
        className={`bg-[white] rounded-[8px] max-w-[730px] w-full overflow-hidden flex gap-[16px] ${isVisible ? "h-[144px] p-[24px]" : "h-0 p-0"}`}
      >
        <img src={Us} className="w-[40px] h-[40px]" />
        <form className="w-[100%] flex gap-[16px]">
          <textarea
            name="Reply"
            defaultValue={TagOP}
            type="text"
            onChange={onChange}
            className="py-[16px] px-[24px] w-full h-full border rounded-[8px] border-[#E9EBF0] focus:border-[#5357B6] outline-none resize-none"
          ></textarea>
          <button
            onClick={ReplyClick}
            className="bg-[#5357B6] rounded-[8px] text-white font-medium text-[16px] cursor-pointer w-[104px] h-[48px] hover:opacity-50"
          >
            REPLY
          </button>
        </form>
      </div>
    </>
  );
}

export default Reply;
