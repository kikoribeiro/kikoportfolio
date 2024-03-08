// components/Navbar.tsx

import React from "react";

import Link from "next/link";
import { ModeToggle } from "./theme-switch";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-6  ">
        <Link className="text-xl font-bold tracking-wider" href="/">
          KIKO
        </Link>
        <nav className="flex gap-6">
        <Link href="/">
          <Button variant="ghost">
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost">
            About
          </Button>
        </Link>
        <Link href="/sugestions">
          <Button variant="ghost">
            Sugestions
          </Button>
        </Link>
        <Link href="#">
          <Button variant="ghost">
            Contact
          </Button>
        </Link>
        <ModeToggle />
        </nav>
      </header>
    </>
  );
}
