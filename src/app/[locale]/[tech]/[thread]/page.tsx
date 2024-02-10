"use client";
import MessageBox from "@/components/MessageBox";
import MessageCard from "@/components/MessageCard";
import { useAppSelector } from "@/lib/hooks/redux";
import { selectMessages } from "@/lib/redux/reducers/threadReducer";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const ThreadTopPage = ({
  params,
}: {
  params: { tech: string; thread: string };
}) => {
  const methods = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const messages = useAppSelector(selectMessages);
  return (
    <div className="flex flex-col justify-between min-h-full h-fit">
      <div className="relative h-full flex flex-col gap-1 mb-5">
        {messages.map((value) => (
          <MessageCard
            key={value.id}
            className=""
            userId={value.userId}
            userName={value.user?.name as string}
            date={value.createdAt}
            content={value.content}
          />
        ))}
      </div>
      <FormProvider {...methods}>
        <MessageBox
          // className={"absolute inset-x-0 bottom-0"}
          onSubmit={onSubmit}
        />
      </FormProvider>
    </div>
  );
};

export default ThreadTopPage;
