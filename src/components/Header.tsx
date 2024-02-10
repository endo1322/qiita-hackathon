import {
  AmazonwebservicesOriginalWordmark,
  COriginal,
  CplusplusOriginal,
  CsharpOriginal,
  Css3Original,
  GoOriginal,
  Html5Original,
  JavaOriginal,
  JavascriptOriginal,
  KotlinOriginal,
  MysqlOriginal,
  PhpOriginal,
  PostgresqlOriginal,
  PythonOriginal,
  RubyOriginal,
  RustOriginal,
  SqliteOriginal,
  SwiftOriginal,
} from "devicons-react";
import { TypescriptOriginal } from "devicons-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const Header = () => {
  // const router = useRouter();
  const locale = useLocale();

  return (
    <header
      className={`flex flex-row justify-between bg-white items-center w-full h-[48px] px-[30px] shadow-sm`}
    >
      <Dialog>
        <DialogTrigger>
          <JavascriptOriginal className="rounded-md" size={"32px"} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>他の技術のコミュニティに移動する</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap gap-3">
            <Link href={`/${locale}/html"`}>
              <Html5Original className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/css3`}>
              <Css3Original className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/javascript`}>
              <JavascriptOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/typescript`}>
              <TypescriptOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/python`}>
              <PythonOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/go`}>
              <GoOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/java`}>
              <JavaOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/kotlin`}>
              <KotlinOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/swift`}>
              <SwiftOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/php`}>
              <PhpOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/c`}>
              <COriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/cplusplus`}>
              <CplusplusOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/csharp`}>
              <CsharpOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/ruby`}>
              <RubyOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/rust`}>
              <RustOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/mysql`}>
              <MysqlOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/postgresql`}>
              <PostgresqlOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/sqlite`}>
              <SqliteOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/amazonwebservices`}>
              <AmazonwebservicesOriginalWordmark
                className="rounded-md"
                size={"50px"}
              />
            </Link>
          </div>
        </DialogContent>
      </Dialog>
      <button>
        <Image
          className=" rounded-full"
          src="/icon.svg"
          width={32}
          height={32}
          alt="Picture of the author"
        />
      </button>
    </header>
  );
};

export default Header;
