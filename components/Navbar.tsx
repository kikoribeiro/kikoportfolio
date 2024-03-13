// components/Navbar.tsx

import React from "react";

import { ModeToggle } from "./theme-switch";
import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "../components/logos/svg";
import styles from "./navbar.module.scss";


export default function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-6  ">
        <Link className="text-xl font-bold tracking-wider"  href="/">
          <Logo/>
        </Link>
        <nav className="flex gap-6">
        <Link href="/">
          <Button className={styles.button} variant="ghost">
            Home
          </Button>
        </Link>
        <Link  href="/about">
          <Button className={styles.button} variant="ghost">
            About
          </Button>
        </Link>
        <Link href="/sugestions">
          <Button className={styles.button} variant="ghost">
            Sugestions
          </Button>
        </Link>
        <Link  href="/contact">
          <Button className={styles.button} variant="ghost">
            Contact
          </Button>
        </Link>
        <ModeToggle />
        </nav>
      </header>
    </>
  );
}
