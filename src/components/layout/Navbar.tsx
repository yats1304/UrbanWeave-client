"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "../common/SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "../common/ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* Logo with brand name */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="UrbanWeave"
          height={36}
          width={36}
          className="w-6 h-6 md:w-9 md:h-9"
        ></Image>
        <p className="hidden md:block text-md font-medium tracking-wider">
          UrbanWeave.
        </p>
      </Link>
      {/* SeaerchBar */}
      <div className="flex items-center gap-6">
        <SearchBar />
        {/* Home, notification bell and Cart  */}
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link href="/login">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
