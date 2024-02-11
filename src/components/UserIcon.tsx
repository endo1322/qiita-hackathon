import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { IconContext } from "react-icons/lib";

const colorSchemes: { [key: number]: { icon: string; background: string } } = {
  1: { icon: "#007BFF", background: "#FFFFFF" },
  2: { icon: "#333333", background: "#F8F9FA" },
  3: { icon: "#FFC107", background: "#FFFFFF" },
  4: { icon: "#17A2B8", background: "#E9ECEF" },
  //   5: { icon: "#343A40", background: "#F8F9FA" },
  //   6: { icon: "#E83E8C", background: "#343A40" },
  //   7: { icon: "#28A745", background: "#FFF3CD" },
  //   8: { icon: "#FD7E14", background: "#0056B3" },
  9: { icon: "#FAB1A0", background: "#ECEFF1" },
  10: { icon: "#C82333", background: "#F8F9FA" },
};

const UserIcon = (props: { userId: number }) => {
  return props.userId === 1322 ? (
    <div className="min-w-8 min-h-8">
      <Image
        className=" rounded-full"
        src="/icon.svg"
        width={32}
        height={32}
        alt="Picture of the author"
      />
    </div>
  ) : (
    <IconContext.Provider
      value={{
        style: {
          color: colorSchemes[props.userId].icon,
          width: "32px",
          height: "32px",
        },
      }}
    >
      <div className="w-fit h-fit">
        <FaUser
          className="rounded-full pt-1"
          style={{ background: colorSchemes[props.userId].background }}
        />
      </div>
    </IconContext.Provider>
  );
};

export default UserIcon;
