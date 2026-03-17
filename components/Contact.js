export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="sparkles" aria-hidden="true">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>
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
              &#x1F4BC;
            </span>
            <h3>能力開花推進事業部</h3>
            <p>セミナー・研修・講演会のお申し込み</p>
            <a href="#contact" className="contact-btn">
              お問い合わせ
            </a>
          </div>
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
        </div>
      </div>
    </section>
  );
}
