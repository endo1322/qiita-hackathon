import { JavascriptOriginal } from "devicons-react";
import { TypescriptOriginal } from "devicons-react";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className={`flex flex-row justify-between bg-white items-center w-full h-[48px] px-[30px] shadow-sm`}
    >
      <button onClick={() => console.log("logo が押されました。")}>
        <JavascriptOriginal className="rounded-md" size={"32px"} />
      </button>
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
