export default function Programs() {
  const programs = [
    {
      number: "01",
      label: "For Children",
      title: "みらいのたね学園",
      subtitle: "子供向けオンライン学園",
      description:
        "不登校の子供たちを対象としたオンライン学園。メタバース（MetaLife）を活用し、自己肯定感や自己効力感を育み、本来持っている力を引き出します。学校の出席扱いになるケースもあります。",
      details: [
        { label: "対象", value: "子供（不登校児童含む）" },
        { label: "形態", value: "オンライン（メタバース）" },
        { label: "月額", value: "25,000円" },
        { label: "入学金", value: "8,800円" },
      ],
      color: "rgba(78, 205, 196, 0.1)",
      accent: "#4ECDC4",
    },
    {
      number: "02",
      label: "For Mothers",
      title: "母子共創アカデミー",
      subtitle: "ハッピーマザーズクラブ / 母親講座",
      description:
        "母親の能力開花を目的としたコミュニティと講座。ハッピーマザーズクラブ、母親講座をはじめとする各種講座、個人カウンセリングを通じて、お母さんが自分らしく生き、子供の可能性を伸ばす場を提供します。",
      details: [
        { label: "コミュニティ", value: "ハッピーマザーズクラブ（無料相談会）" },
        { label: "母親講座", value: "母親の能力開花・各種講座" },
        { label: "カウンセリング", value: "個人カウンセリング" },
        { label: "認定講師", value: "修了者が地域で活動可能" },
      ],
      color: "rgba(212, 197, 160, 0.1)",
      accent: "#D4C5A0",
    },
    {
      number: "03",
      label: "For Business",
      title: "能力開花",
      subtitle: "経営者・ビジネス向け",
      description:
        "経営者やビジネスマンを対象とした組織変革・人材育成プログラム。幹部研修やチームマネジメント、日本の精神性に基づいたコミュニケーション力向上を提供します。",
      details: [
        { label: "対象", value: "経営者・ビジネスパーソン" },
        { label: "企業研修", value: "幹部研修・次世代人材育成" },
        { label: "定例セミナー", value: "京阪神で月1回" },
        { label: "参加費", value: "6,000〜8,000円" },
      ],
      color: "rgba(160, 120, 200, 0.1)",
      accent: "#B898D0",
    },
  ];

  return (
    <section id="programs" className="programs">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Programs</span>
          <h2 className="section-title">3つの事業</h2>
          <p className="section-subtitle">
            子ども・家庭・社会、三つの領域から<br />
            人の可能性を開く事業を展開しています。
          </p>
        </div>
        <div className="programs-list">
          {programs.map((program) => (
            <article key={program.number} className="program-card">
              <div className="program-header">
                <span
                  className="program-number"
                  style={{ color: program.accent }}
                >
                  {program.number}
                </span>
                <span className="program-label">{program.label}</span>
              </div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-subtitle">{program.subtitle}</p>
              <p className="program-description">{program.description}</p>
              <div
                className="program-details"
                style={{ backgroundColor: program.color }}
              >
                {program.details.map((detail, i) => (
                  <div key={i} className="detail-row">
                    <span className="detail-label">{detail.label}</span>
                    <span className="detail-value">{detail.value}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
