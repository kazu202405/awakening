export default function Philosophy() {
  const values = [
    {
      icon: "\u{1F331}",
      title: "成長",
      description:
        "家族一人ひとりが本来持っている力を引き出し、共に成長する場を創ります。",
    },
    {
      icon: "\u{1F1EF}\u{1F1F5}",
      title: "精神性",
      description:
        "脳科学や心理学に加え、日本の精神性をベースとした「在り方」を大切にします。",
    },
    {
      icon: "\u{1F504}",
      title: "変容",
      description:
        "家庭という最小単位から、社会全体のアップデートを目指します。",
    },
  ];

  return (
    <section id="philosophy" className="philosophy">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Philosophy</span>
          <h2 className="section-title">理念</h2>
          <p className="section-subtitle">
            子ども・家庭・社会、この三つの領域から人の可能性を開き、<br />
            誰もが自分らしく力を発揮できる社会を広げていきます。
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <article key={index} className="value-card">
              <span className="value-icon" role="img" aria-hidden="true">
                {value.icon}
              </span>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </article>
          ))}
        </div>
        <div className="philosophy-statement">
          <blockquote>
            日本の精神性の在り方や、新しい時代の子供・子育てを伝え、
            家庭という最小単位から社会をアップデートしていくプラットフォーム。
          </blockquote>
        </div>
      </div>
    </section>
  );
}
