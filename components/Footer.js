export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">AWAKENING</span>
            <p className="footer-tagline">一般社団法人アウェイクニング</p>
          </div>
          <nav className="footer-nav" aria-label="フッターナビゲーション">
            <a href="#programs">事業内容</a>
            <a href="#philosophy">理念</a>
            <a href="#about">協会について</a>
            <a href="#contact">お問い合わせ</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 一般社団法人アウェイクニング All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
