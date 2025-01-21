import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-background/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:saturate-100">
      <div className="mx-auto flex h-[60px] max-w-5xl items-center justify-between px-8">
        Header
      </div>
    </header>
  );
};

export default Header;
