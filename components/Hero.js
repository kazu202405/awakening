export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-stars"></div>
      <div className="hero-content">
        <p className="hero-tagline">競争から共創へ。和の精神で可能性を開く。</p>
        <h1 className="hero-title">
          <span className="hero-title-en">AWAKENING</span>
          <span className="hero-title-ja">一般社団法人アウェイクニング</span>
        </h1>
        <p className="hero-description">
          私たちは、比較や競争の中で本来の価値や可能性を見失いがちな社会から、<br />
          互いの個性を生かし合う共創の社会への転換を目指しています。<br />
          本来の自分が目覚める社会へ。
        </p>
        <a href="#programs" className="hero-cta">
          事業内容を見る
        </a>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
