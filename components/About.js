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
            <h3>一般社団法人アウェイクニング</h3>
            <p>
              アウェイクニング協会は、「父親・母親・子供の3人一体」で社会を変えていくことを目的とした
              一般社団法人です。
            </p>
            <p>
              単なる教育機関ではなく、家庭という最小単位から日本の精神性を立て直し、
              社会をアップデートしていくためのプラットフォームとして活動しています。
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
                  <p>無料相談会やハッピーマザーズクラブで、お気軽にご参加ください</p>
                </div>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">
                <span className="flow-number">2</span>
                <div>
                  <strong>講座・学園で学ぶ</strong>
                  <p>母親講座やみらいのたね学園で、親子で一緒に成長していきます</p>
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
