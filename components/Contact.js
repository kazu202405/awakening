export default function Contact() {
  const cards = [
    {
      num: "01",
      label: "For Society",
      title: "能力開花推進事業部",
      desc: "セミナー・研修・講演会のお申し込み",
      href: "/training",
    },
    {
      num: "02",
      label: "For Children",
      title: "みらいのたね学園について",
      desc: "入学相談・体験のお申し込み",
      href: "/payment/mirai",
    },
    {
      num: "03",
      label: "For Mothers",
      title: "ハッピーマザーズクラブ / 母親講座",
      desc: "無料相談会・講座のお申し込み",
      href: "/payment/boshi",
    },
  ];

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
          {cards.map((c) => (
            <div key={c.num} className="contact-card">
              <span className="contact-num" aria-hidden="true">{c.num}</span>
              <span className="contact-cat">{c.label}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <a href={c.href} className="contact-btn">
                お問い合わせ
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
