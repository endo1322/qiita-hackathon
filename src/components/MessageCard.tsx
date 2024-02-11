import React from "react";
import UserIcon from "./UserIcon";

const MessageCard = (props: {
  className: string;
  userId: number;
  userName: string;
  date: string;
  content: string;
}) => {
  return (
    <div className={"flex gap-2 bg-white p-2 rounded-md shadow-md"}>
      <UserIcon userId={props.userId} />
      <div className="flex flex-col text-sm">
        <div className="flex gap-2 items-center">
          <p className="flex">{props.userName}</p>
          <p className="flex text-xs text-gray-500">{props.date}</p>
        </div>
        <div className="">
          <p>{props.content}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MessageCard;
