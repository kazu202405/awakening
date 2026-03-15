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
              アウェイクニング協会は、藤原恵津子が代表を務める「Coach
              FIORE（コーチ・フィオーレ）」の
              活動をさらに広げ、「父親・母親・子供の3人一体」で社会を変えていくことを目的とした
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
                <span className="info-label">母体</span>
                <span className="info-value">
                  Coach FIORE（コーチ・フィオーレ）
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">形態</span>
                <span className="info-value">一般社団法人</span>
              </div>
            </div>
          </div>
          <div className="about-strategy">
            <h4>マーケティング戦略</h4>
            <div className="strategy-flow">
              <div className="flow-step">
                <span className="flow-number">1</span>
                <div>
                  <strong>コミュニティ入口</strong>
                  <p>Happy Mother&apos;s（無料相談会）で接点を創出</p>
                </div>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">
                <span className="flow-number">2</span>
                <div>
                  <strong>講座・学園へ誘導</strong>
                  <p>各種講座やみらいのたね学園へつなげる</p>
                </div>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">
                <span className="flow-number">3</span>
                <div>
                  <strong>認定講師育成</strong>
                  <p>修了者が地域で活動し、さらに広がる</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
