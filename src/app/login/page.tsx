import React from "react";
import Login from ".";
import Header from "@/components/Header";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <Header />
      <Image
        src="/bg.jpg"
        alt="bg-image"
        width={0}
        height={0}
        className="w-full h-full"
      />
      <Login />
    </div>
  );
};

export default Page;
