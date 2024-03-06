// components/Navbar.tsx

import React from 'react';

import Link from 'next/link';
import { ModeToggle } from './theme-switch';
import { Button } from './ui/button';


 export default function Navbar() {
  return (
    <>
    <header className="flex items-center justify-between px-4 py-6  ">
      <Link className="text-xl font-bold tracking-wider" href="#">
        KIKO
      </Link>
      <nav className="space-x-6">
        <Button  variant="ghost">
          <Link  href="/">
            Home
          </Link>
        </Button>
        <Button  variant="ghost">
          <Link  href="">
            Services
          </Link>
        </Button>
        <Button className="" variant="ghost">
          <Link href="/about">
            About
          </Link>
        </Button>
        <Button className="" variant="ghost">
          <Link  href="#">
            Contact
          </Link>
        </Button>
        <ModeToggle />
      </nav>
    </header>
  </>
  );
};
