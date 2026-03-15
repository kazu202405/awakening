import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === "/";

  const navLinks = [
    { href: "/#programs", label: "事業内容" },
    { href: "/#philosophy", label: "理念" },
    { href: "/#about", label: "協会について" },
    { href: "/#contact", label: "お問い合わせ" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">
          <span className="logo-main">AWAKENING</span>
          <span className="logo-sub">アウェイクニング協会</span>
        </a>
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          id="main-nav"
          className={`nav ${menuOpen ? "open" : ""}`}
          role="navigation"
          aria-label="メインナビゲーション"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
