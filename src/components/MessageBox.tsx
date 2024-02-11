"use client";
import React from "react";
import { useFormContext, SubmitHandler } from "react-hook-form";
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";
import { messageFormType } from "@/types/message";

interface MessageBoxProps {
  className?: string;
  onSubmit: SubmitHandler<messageFormType>;
}

const MessageBox = (props: MessageBoxProps) => {
  const { register, handleSubmit } = useFormContext<messageFormType>(); // retrieve all hook methods
  return (
    <form
      className={twMerge(
        "flex flex-col border rounded-lg bg-white p-2 gap-2",
        props.className
      )}
      onSubmit={handleSubmit(props.onSubmit)}
    >
      <textarea
        placeholder="テキストを入力"
        className="h-50 py-1 px-2 outline-none"
        {...register("content")}
      />
      <div className="flex justify-end">
        <Button className="" variant={"default"} size={"sm"}>
          投稿する
        </Button>
      </div>
    </form>
  );
};

export default MessageBox;
