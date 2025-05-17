import React from 'react'
import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo">My Blog</Link>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog/create">Create</Link>
      </nav>
    </header>
  )
}
