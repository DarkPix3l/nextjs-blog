import React from "react";
import Link from "next/link";
import "./header.css";
import Image from "next/image";


export default function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        {" "}
        <Link href="/">
          <Image
            className="logo"
            src="/logo.svg"
            alt="the Blog's Logo"
            width={50}
            height={50}
          />
        </Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog/create">Create</Link>
        </nav>
      </div>
    </header>
  );
}
