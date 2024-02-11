"use client";
import MessageBox from "@/components/MessageBox";
import MessageCard from "@/components/MessageCard";
import { useAppSelector } from "@/lib/hooks/redux";
import {
  selectMessages,
  selectThread,
} from "@/lib/redux/reducers/threadReducer";
import { messageFormType } from "@/types/message";
import { trpc } from "@/utils/trpc/trpc";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

const ThreadTopPage = ({
  params,
}: {
  params: { tech: string; thread: string };
}) => {
  const threadId = useAppSelector(selectThread)?.id as number;
  console.log(threadId);
  const messageCreate = trpc.message.create.useMutation();
  const methods = useForm<messageFormType>();
  const onSubmit: SubmitHandler<messageFormType> = (data) => {
    data.threadId = threadId;
    data.userId = 1322;
    console.log(data);
    messageCreate.mutate(data);
    methods.reset();
  };
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
        <MessageBox onSubmit={onSubmit} />
      </FormProvider>
    </div>
  );
};

export default ThreadTopPage;
