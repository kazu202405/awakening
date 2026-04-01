export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-stars"></div>
      <div className="hero-content">
        <p className="hero-tagline">お子さんの可能性を信じるあなたへ</p>
        <h1 className="hero-title">
          <span className="hero-title-en">AWAKENING</span>
          <span className="hero-title-ja">一般社団法人日本アウェイクニング協会</span>
        </h1>
        <p className="hero-description">
          競争から共創へ。和の精神で可能性を開く。<br />
          子ども・母親・家庭から、本来の自分が目覚める社会へ。
        </p>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
