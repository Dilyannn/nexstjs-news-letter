import { getAvailableNewsYears } from "@/lib/news.js";
import Link from "next/link.js";

export default async function YearNavArchive() {
  const links = getAvailableNewsYears();

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <Link href={`/archive/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
