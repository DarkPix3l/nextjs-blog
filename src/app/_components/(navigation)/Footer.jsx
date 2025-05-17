import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        <nav className="footer-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog/create">Create</Link>
        </nav>
      </div>
    </footer>
  );
}