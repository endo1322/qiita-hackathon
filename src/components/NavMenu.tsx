import Link from "next/link";

const NavMenu = () => {
  return (
    <nav className="flex flex-col w-[150px] h-full shadow-elevation-2 z-10 justify-between py-6 bg-white">
      <div className="flex flex-col gap-3 pl-[20px] pr-[5px] text-sm">
        <Link
          className={"pl-2 hover:bg-secondary rounded-md"}
          href={"/ja/console"}
        >
          ホーム
        </Link>
        <Link
          className={"pl-2 hover:bg-secondary rounded-md"}
          href={"/ja/console"}
        >
          アカウント管理
        </Link>
        <Link
          className={"pl-2 hover:bg-secondary rounded-md"}
          href={"/ja/console"}
        >
          アカウント一覧
        </Link>
        <Link
          className={"pl-2 hover:bg-secondary rounded-md"}
          href={"/ja/console/company/1"}
        >
          所属ストア
        </Link>
        <Link
          className={"pl-2 hover:bg-secondary rounded-md"}
          href={"/ja/console/companies"}
        >
          ストア一覧
        </Link>
        <Link
          className={"pl-2 hover:bg-secondary rounded-md"}
          href={"/ja/console"}
        >
          ショップ
        </Link>
        <Link
          className={"pl-2 hover:bg-secondary rounded-md"}
          href={"/ja/console"}
        >
          お知らせ
        </Link>
        <Link
          className={"pl-2 hover:bg-secondary rounded-md"}
          href={"/ja/console"}
        >
          ビーコン
        </Link>
        <Link
          className={"pl-2 hover:bg-secondary rounded-md"}
          href={"/ja/console"}
        >
          統計
        </Link>
      </div>
    </nav>
  );
};

export default NavMenu;
