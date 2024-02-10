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
import { useAppSelector } from "@/lib/hooks/redux";
import { selectTech } from "@/lib/redux/reducers/threadReducer";

const Header = () => {
  // const router = useRouter();
  const locale = useLocale();
  const language = useAppSelector(selectTech);

  return (
    <header
      className={`flex flex-row justify-between bg-white items-center w-full h-[48px] min-h-[48px] px-[30px] shadow-sm`}
    >
      <div className="flex gap-5">
        <button>
          <Image
            className=""
            src="/logo.svg"
            width={75}
            height={35}
            alt="Picture of the author"
          />
        </button>

        <Dialog>
          <DialogTrigger>
            {language == "html" ? (
              <Html5Original className="rounded-md" size={"32px"} />
            ) : language == "css" ? (
              <Css3Original className="rounded-md" size={"32px"} />
            ) : language == "javascript" ? (
              <JavascriptOriginal className="rounded-md" size={"32px"} />
            ) : language == "typescript" ? (
              <TypescriptOriginal className="rounded-md" size={"32px"} />
            ) : language == "python" ? (
              <PythonOriginal className="rounded-md" size={"32px"} />
            ) : language == "go" ? (
              <GoOriginal className="rounded-md" size={"32px"} />
            ) : language == "java" ? (
              <JavaOriginal className="rounded-md" size={"32px"} />
            ) : language == "kotlin" ? (
              <KotlinOriginal className="rounded-md" size={"32px"} />
            ) : language == "swift" ? (
              <SwiftOriginal className="rounded-md" size={"32px"} />
            ) : language == "php" ? (
              <PhpOriginal className="rounded-md" size={"32px"} />
            ) : language == "c" ? (
              <COriginal className="rounded-md" size={"32px"} />
            ) : language == "cplusplus" ? (
              <CplusplusOriginal className="rounded-md" size={"32px"} />
            ) : language == "csharp" ? (
              <CsharpOriginal className="rounded-md" size={"32px"} />
            ) : language == "ruby" ? (
              <RubyOriginal className="rounded-md" size={"32px"} />
            ) : language == "rust" ? (
              <RustOriginal className="rounded-md" size={"32px"} />
            ) : language == "mysql" ? (
              <MysqlOriginal className="rounded-md" size={"32px"} />
            ) : language == "postgresql" ? (
              <PostgresqlOriginal className="rounded-md" size={"32px"} />
            ) : language == "sqlite" ? (
              <SqliteOriginal className="rounded-md" size={"32px"} />
            ) : language == "amazonwebservices" ? (
              <AmazonwebservicesOriginalWordmark
                className="rounded-md"
                size={"32px"}
              />
            ) : (
              <></>
            )}
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
              <Link href={`/${locale}/html/general`}>
                <Html5Original className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/css/general`}>
                <Css3Original className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/javascript/general`}>
                <JavascriptOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/typescript/general`}>
                <TypescriptOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/python/general`}>
                <PythonOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/go/general`}>
                <GoOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/java/general`}>
                <JavaOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/kotlin/general`}>
                <KotlinOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/swift/general`}>
                <SwiftOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/php/general`}>
                <PhpOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/c/general`}>
                <COriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/cplusplus/general`}>
                <CplusplusOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/csharp/general`}>
                <CsharpOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/ruby/general`}>
                <RubyOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/rust/general`}>
                <RustOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/mysql/general`}>
                <MysqlOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/postgresql/general`}>
                <PostgresqlOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/sqlite/general`}>
                <SqliteOriginal className="rounded-md" size={"50px"} />
              </Link>
              <Link href={`/${locale}/amazonwebservices/general`}>
                <AmazonwebservicesOriginalWordmark
                  className="rounded-md"
                  size={"50px"}
                />
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>

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
