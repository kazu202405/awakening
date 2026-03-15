export default function Programs() {
  const programs = [
    {
      number: "01",
      label: "For Children",
      title: "みらいのたね学園",
      subtitle: "次代を創る子どもの育成",
      description:
        "不登校の子供たちを対象としたオンライン学園。メタバース（MetaLife）を活用し、自己肯定感や自己効力感を育み、本来持っている力を引き出します。学校の出席扱いになります。",
      details: [
        { label: "対象", value: "子供（不登校児童含む）" },
        { label: "形態", value: "オンライン（メタバース）" },
        { label: "月額", value: "25,000円" },
        { label: "入学金", value: "8,800円" },
      ],
      color: "#E8F5F2",
      accent: "#2E9E8F",
    },
    {
      number: "02",
      label: "For Mothers",
      title: "母子共創アカデミー事業部",
      subtitle: "ハッピーマザーズクラブ / 母親講座",
      description:
        "母親の能力開花を目的としたコミュニティと講座。ハッピーマザーズクラブ、母親講座をはじめとする各種講座、個人カウンセリングを通じて、お母さんが自分らしく生き、子供の可能性を伸ばす場を提供します。",
      details: [
        { label: "コミュニティ", value: "ハッピーマザーズクラブ" },
        { label: "能力開花", value: "母親の能力開花" },
        { label: "講座", value: "母親講座をはじめとする講座" },
        { label: "カウンセリング", value: "個人カウンセリング" },
      ],
      color: "#FFF5EB",
      accent: "#C0956C",
    },
    {
      number: "03",
      label: "For Society",
      title: "能力開花推進事業部",
      subtitle: "和の精神性を軸にしたセミナー・研修・講演会",
      description:
        "父親・一般社会人・経営者を対象とした、和の精神性を軸にしたセミナー・研修・講演会。組織変革や人材育成、日本の精神性に基づいたコミュニケーション力向上を提供します。",
      details: [
        { label: "対象", value: "父親・一般社会人・経営者" },
        { label: "内容", value: "セミナー・研修・講演会" },
        { label: "定例セミナー", value: "京阪神で月1回" },
        { label: "参加費", value: "6,000〜8,000円" },
      ],
      color: "#EEF2FA",
      accent: "#5A7AB5",
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

        {/* ベン図風の関係図 */}
        <div className="programs-venn">
          <div className="venn-circle venn-top">
            <div className="venn-content">
              <span className="venn-label">父親・社会</span>
              <strong>能力開花推進事業部</strong>
              <span className="venn-desc">セミナー・研修・講演会</span>
            </div>
          </div>
          <div className="venn-circle venn-left">
            <div className="venn-content">
              <span className="venn-label">子ども</span>
              <strong>みらいのたね学園</strong>
              <span className="venn-desc">次代を創る子どもの育成</span>
            </div>
          </div>
          <div className="venn-circle venn-right">
            <div className="venn-content">
              <span className="venn-label">母親</span>
              <strong>母子共創アカデミー</strong>
              <span className="venn-desc">能力開花・講座・カウンセリング</span>
            </div>
          </div>
          <div className="venn-center">
            <span>共創</span>
          </div>
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
