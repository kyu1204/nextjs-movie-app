"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import sytles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={sytles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <a href="/about-us">About Us</a> {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
