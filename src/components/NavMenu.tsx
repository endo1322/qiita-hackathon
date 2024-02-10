import { useAppSelector } from "@/lib/hooks/redux";
import { selectTech, selectThreads } from "@/lib/redux/reducers/techReducer";
import { selectThread } from "@/lib/redux/reducers/threadReducer";
import { threadType } from "@/types/thread";
import { useLocale } from "next-intl";
import Link from "next/link";

const NavMenu = () => {
  const local = useLocale();
  const tech = useAppSelector(selectTech);
  const threads = useAppSelector(selectThreads);
  const thread = useAppSelector(selectThread) as threadType;
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
                href={`/${local}/${tech}/${value.id}`}
              >
                {value.name}
              </Link>
            ) : (
              <Link
                key={value.id}
                className={"px-4 py-1 hover:bg-secondary rounded-md border-b"}
                href={`/${local}/${tech}/${value.id}`}
              >
                {value.name}
              </Link>
            )
          )}
      </div>
    </nav>
  );
};

export default NavMenu;
