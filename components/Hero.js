export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-stars"></div>
      <div className="hero-content">
        <p className="hero-tagline">和の精神で調和と共創の未来へ</p>
        <h1 className="hero-title">
          <span className="hero-title-en">AWAKENING</span>
          <span className="hero-title-ja">一般社団法人日本アウェイクニング協会</span>
        </h1>
        <p className="hero-description">
          能力開花推進・みらいのたね学園・母子共創アカデミー<br />
          3つの柱で、一人ひとりの可能性を開いていきます
        </p>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
