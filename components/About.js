export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About</span>
          <h2 className="section-title">協会について</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <h3>一般社団法人日本アウェイクニング協会</h3>
            <p>
              日本アウェイクニング協会は、和の精神性を軸に、一人ひとりの能力開花を推進し、
              「父親・母親・子供の3人一体」で社会を変えていくことを目的とした一般社団法人です。
            </p>
            <p>
              能力開花推進事業部・みらいのたね学園・母子共創アカデミーの3事業を通じて、
              個人・家庭・社会の三位一体で日本の精神性を立て直し、社会をアップデートしていきます。
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">代表</span>
                <span className="info-value">藤原恵津子</span>
              </div>
<div className="info-item">
                <span className="info-label">形態</span>
                <span className="info-value">一般社団法人</span>
              </div>
            </div>
          </div>
          <div className="about-strategy">
            <h4>ご参加の流れ</h4>
            <div className="strategy-flow">
              <div className="flow-step">
                <span className="flow-number">1</span>
                <div>
                  <strong>まずは気軽に参加</strong>
                  <p>セミナーや無料相談会で、お気軽にご参加ください</p>
                </div>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">
                <span className="flow-number">2</span>
                <div>
                  <strong>講座・研修で学ぶ</strong>
                  <p>各事業部の講座・研修を通じて、本来の力を引き出していきます</p>
                </div>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">
                <span className="flow-number">3</span>
                <div>
                  <strong>お仕事にする</strong>
                  <p>ご希望の方は認定講師として、学びを活かしたお仕事をしていただけます</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
