import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="absolute py-3 px-3 bg-gradient-to-b from-black w-full">
      <Image src="/logo.png" alt="logo" width={180} height={180} />
    </div>
  );
};

export default Header;
