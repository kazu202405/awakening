export default function Concerns() {
  const concerns = [
    {
      icon: "\u{1F3E0}",
      text: "子どもが学校に行けなくなり、\nこの先どうすればいいか分からない",
    },
    {
      icon: "\u{1F494}",
      text: "子育てに自信がなくなり、\n自分を責めてしまう",
    },
    {
      icon: "\u{1F465}",
      text: "周りに相談できる人がいない、\n孤独を感じている",
    },
    {
      icon: "\u{1F50D}",
      text: "子どもの本来の力を\n引き出してあげたい",
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
          ひとりで抱え込まないでください。<br />
          同じ想いを持つ仲間と、一緒に歩んでいける場所があります。
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
