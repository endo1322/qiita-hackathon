"use client";
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
  TypescriptOriginal,
} from "devicons-react";
import { useLocale, useTranslations } from "next-intl";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  const locale = useLocale();
  const t = useTranslations("Index");
  return (
    <div className="h-full">
      <Header mode={false} className="fixed" />
      <div className="flex flex-col h-full items-center justify-center gap-2 px-20">
        <div className="flex">
          <Image
            src={"/logo2.svg"}
            width={500}
            height={60}
            alt="Picture of the author"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            エンジニアが気楽につながるための掲示板
          </h1>
        </div>
        <div className="flex flex-col items-center bg-white p-5 rounded-md shadow-lg">
          <div className="flex mb-5">
            <h2 className="text-xl font-bold">早速コミュニティを探そう！</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={`/${locale}/html/1`}>
              <Html5Original className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/css/2`}>
              <Css3Original className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/javascript/3`}>
              <JavascriptOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/typescript/4`}>
              <TypescriptOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/python/5`}>
              <PythonOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/go/6`}>
              <GoOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/java/7`}>
              <JavaOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/kotlin/8`}>
              <KotlinOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/swift/9`}>
              <SwiftOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/php/10`}>
              <PhpOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/c/11`}>
              <COriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/cplusplus/12`}>
              <CplusplusOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/csharp/13`}>
              <CsharpOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/ruby/14`}>
              <RubyOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/rust/15`}>
              <RustOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/mysql/16`}>
              <MysqlOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/postgresql/17`}>
              <PostgresqlOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/sqlite/18`}>
              <SqliteOriginal className="rounded-md" size={"50px"} />
            </Link>
            <Link href={`/${locale}/amazonwebservices/19`}>
              <AmazonwebservicesOriginalWordmark
                className="rounded-md"
                size={"50px"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
