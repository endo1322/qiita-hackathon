import { useAppSelector } from "@/lib/hooks/redux";
import { selectTech, selectThreads } from "@/lib/redux/reducers/threadReducer";
import { useLocale } from "next-intl";
import Link from "next/link";

const NavMenu = () => {
  const local = useLocale();
  const tech = useAppSelector(selectTech);
  const threads = useAppSelector(selectThreads);
  console.log(threads);
  return (
    <nav className="flex flex-col w-[150px] min-w-[150px] h-full shadow-elevation-2 z-10 justify-between py-6 bg-white">
      <div className="flex flex-col gap-3 pl-[20px] pr-[5px] text-sm">
        {threads.length != 0 &&
          threads.map((value) => (
            <Link
              key={value.id}
              className={"pl-4 hover:bg-secondary rounded-md"}
              href={`/${local}/${tech}/${value.id}`}
            >
              {value.name}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default NavMenu;
