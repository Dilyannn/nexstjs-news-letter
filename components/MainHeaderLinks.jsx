"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeaderLinks() {
  const pathname = usePathname();

  return (
    <ul>
      <li>
        <Link
          href="/news"
          className={pathname.startsWith("/news") ? "active" : ""}
        >
          News
        </Link>
      </li>
      <li>
        <Link
          href="/archive"
          className={pathname.startsWith("/archive") ? "active" : ""}
        >
          Archive
        </Link>
      </li>
    </ul>
  );
}
