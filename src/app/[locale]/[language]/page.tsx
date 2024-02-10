"use client";
import MessageBox from "@/components/MessageBox";
import MessageCard from "@/components/MessageCard";
import UserIcon from "@/components/UserIcon";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const LanguageTopPage = () => {
  const methods = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="flex flex-col justify-between min-h-full h-fit">
      <div className="relative h-full flex flex-col gap-1 mb-5">
        {[1, 2, 3, 4, 9, 10, 1322].map((value) => (
          <MessageCard
            key={value}
            className=""
            userId={value}
            userName="endo"
            date="2024"
            content="こんにちはこんにちはこんにちはこんにちはこんにちはあああああああちはあああああああはこんにちはこんにちはあああああああちはあああああああはこんにちはこんにちはあああああああちはあああああああはこんにちはこんにちはあああああああちはあああああああ"
          />
        ))}
      </div>
      <FormProvider {...methods}>
        <MessageBox
          // className={"absolute inset-x-0 bottom-0"}
          onSubmit={onSubmit}
        />
        {/* </form> */}
      </FormProvider>
    </div>
  );
};

export default LanguageTopPage;
