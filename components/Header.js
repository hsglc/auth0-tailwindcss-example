/** @format */

import Link from "next/link";

function Header() {
  return (
    <header className="site-container py-6">
      <nav className="space-x-2 text-lg text-green-600 font-bold">
        <Link href="/">
          <a className="hover:text-green-400">About</a>
        </Link>
        <Link href="/blog">
          <a className="hover:text-green-400">Posts</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
