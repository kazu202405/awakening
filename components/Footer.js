export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="/" className="footer-logo">AWAKENING</a>
            <p className="footer-tagline">一般社団法人日本アウェイクニング協会</p>
          </div>
          <nav className="footer-nav" aria-label="フッターナビゲーション">
            <a href="/#programs">事業内容</a>
            <a href="/#philosophy">理念</a>
            <a href="/#about">協会について</a>
            <a href="/#contact">お問い合わせ</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="/legal">特定商取引法に基づく表記</a>
            <a href="/privacy">プライバシーポリシー</a>
          </div>
          <p>&copy; 2026 一般社団法人日本アウェイクニング協会 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
