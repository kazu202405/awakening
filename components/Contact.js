export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">お問い合わせ</h2>
          <p className="section-subtitle">
            各事業やご相談について、<br />
            お気軽にお問い合わせください。
          </p>
        </div>
        <div className="contact-cards">
          <div className="contact-card">
            <span className="contact-icon" role="img" aria-hidden="true">
              &#x1F476;
            </span>
            <h3>みらいのたね学園について</h3>
            <p>入学相談・体験のお申し込み</p>
            <a href="#contact" className="contact-btn">
              お問い合わせ
            </a>
          </div>
          <div className="contact-card">
            <span className="contact-icon" role="img" aria-hidden="true">
              &#x1F469;
            </span>
            <h3>ハッピーマザーズクラブ / 母親講座</h3>
            <p>無料相談会・講座のお申し込み</p>
            <a href="#contact" className="contact-btn">
              お問い合わせ
            </a>
          </div>
          <div className="contact-card">
            <span className="contact-icon" role="img" aria-hidden="true">
              &#x1F4BC;
            </span>
            <h3>企業研修 / セミナー</h3>
            <p>法人研修・セミナーのお申し込み</p>
            <a href="#contact" className="contact-btn">
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
