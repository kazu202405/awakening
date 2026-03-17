export default function Voices() {
  const voices = [
    {
      text: "セミナーを通じて、和の精神性に基づいたコミュニケーションの大切さに気づきました。組織の雰囲気が変わり、チーム全体のパフォーマンスが向上しています。",
      name: "40代 経営者",
      program: "能力開花推進事業部",
    },
    {
      text: "不登校だった息子が、みらいのたね学園で自分のペースを見つけ、毎日楽しそうに学んでいます。「ここなら大丈夫」と思えた場所でした。",
      name: "小学5年生のお母さん",
      program: "みらいのたね学園",
    },
    {
      text: "母親講座を受けて、子どもを変えようとするのではなく、まず自分が変わることの大切さに気づきました。家庭の雰囲気がガラッと変わりました。",
      name: "中学1年生のお母さん",
      program: "母子共創アカデミー",
    },
  ];

  return (
    <section className="voices">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Voices</span>
          <h2 className="section-title">参加者の声</h2>
        </div>
        <div className="voices-grid">
          {voices.map((voice, i) => (
            <article key={i} className="voice-card">
              <p className="voice-text">{voice.text}</p>
              <div className="voice-info">
                <span className="voice-name">{voice.name}</span>
                <span className="voice-program">{voice.program}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
