export default function Concerns() {
  const concerns = [
    {
      icon: "\u{1F331}",
      text: "自分の本来の力を発揮できていない、\nもっと成長したいと感じている",
    },
    {
      icon: "\u{1F3E2}",
      text: "組織のコミュニケーションや\n人財育成に課題を感じている",
    },
    {
      icon: "\u{1F50D}",
      text: "日本の精神性を活かした\n自己変革・組織変革を学びたい",
    },
  ];

  return (
    <section className="concerns">
      <div className="container">
        <div className="section-header">
          <h2 className="concerns-heading">
            こんなお悩み、ありませんか？
          </h2>
        </div>
        <div className="concerns-grid">
          {concerns.map((concern, i) => (
            <div key={i} className="concern-card">
              <span className="concern-icon" role="img" aria-hidden="true">
                {concern.icon}
              </span>
              <p className="concern-text">{concern.text}</p>
            </div>
          ))}
        </div>
        <p className="concerns-message">
          あなたの中に眠る可能性を、共に開花させましょう。<br />
          和の精神性を軸に、本来の力を引き出す場がここにあります。
        </p>
        <div className="concerns-cta">
          <a href="#contact" className="concerns-btn">
            まずは無料相談会へ
          </a>
        </div>
      </div>
    </section>
  );
}
