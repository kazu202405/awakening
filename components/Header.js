import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === "/";

  const navLinks = [
    { href: "/#programs", label: "事業内容" },
    { href: "/#philosophy", label: "理念" },
    { href: "/training", label: "法人研修" },
    { href: "/#about", label: "協会について" },
    { href: "/#contact", label: "お問い合わせ" },
  ];

  const paymentLinks = [
    { href: "/payment/nouryoku", label: "能力開花推進事業部" },
    { href: "/payment/mirai", label: "みらいのたね学園" },
    { href: "/payment/boshi", label: "母子共創アカデミー" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">
          <span className="logo-main">AWAKENING</span>
          <span className="logo-sub">日本アウェイクニング協会</span>
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
          <div
            className="nav-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="nav-link nav-dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              お申し込み
              <span className="dropdown-arrow">▾</span>
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
              {paymentLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="dropdown-item"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
