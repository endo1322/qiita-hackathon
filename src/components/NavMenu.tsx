import { useAppSelector } from "@/lib/hooks/redux";
import { selectTech, selectThreads } from "@/lib/redux/reducers/techReducer";
import { selectThread } from "@/lib/redux/reducers/threadReducer";
import { threadFormType, threadType } from "@/types/thread";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusSquare } from "lucide-react";
import { techType } from "@/types/tech";
import { trpc } from "@/utils/trpc/trpc";

const NavMenu = () => {
  const threadCreate = trpc.thread.create.useMutation();
  const local = useLocale();
  const tech = useAppSelector(selectTech) as techType;
  const threads = useAppSelector(selectThreads);
  const thread = useAppSelector(selectThread) as threadType;
  const { register, handleSubmit, reset } = useForm<threadFormType>();
  const onSubmit: SubmitHandler<threadFormType> = (data) => {
    data.techId = tech?.id;
    data.userId = 1322;
    console.log(data);
    threadCreate.mutate(data);
    reset();
  };

  return (
    <nav className="flex flex-col w-[150px] min-w-[150px] h-full shadow-elevation-2 z-10 justify-between py-6 bg-white">
      <div className="flex flex-col gap-1 pl-[20px] pr-[5px] text-sm">
        {threads.length != 0 &&
          threads.map((value) =>
            thread.id == value.id ? (
              <Link
                key={value.id}
                className={
                  "px-4 py-1 bg-primary text-primary-foreground font-bold rounded-md border-b"
                }
                href={`/${local}/${tech?.name}/${value.id}`}
              >
                {value.name}
              </Link>
            ) : (
              <Link
                key={value.id}
                className={"px-4 py-1 hover:bg-secondary rounded-md border-b"}
                href={`/${local}/${tech?.name}/${value.id}`}
              >
                {value.name}
              </Link>
            )
          )}
        <Dialog>
          <DialogTrigger>
            <div
              className={
                "flex px-4 py-1 mt-2 hover:bg-secondary rounded-md text-xs gap-1"
              }
            >
              <PlusSquare className="flex min-w-3" size={15} />
              <p className="flex">新しく作成</p>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>新しいスレッドを作成する</DialogTitle>
            </DialogHeader>
            <form
              className={"flex flex-col border rounded-lg bg-white p-2 gap-2"}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                placeholder="テキストを入力"
                className="h-50 py-1 px-2 outline-none"
                {...register("name")}
              />
              <div className="flex justify-end">
                <DialogClose
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 w-fit rounded-md px-3"
                >
                  投稿する
                </DialogClose>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default NavMenu;
