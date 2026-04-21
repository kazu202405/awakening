export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About</span>
          <h2 className="section-title">協会について</h2>
        </div>
        <div className="about-grid">
          <div className="about-representative">
            <div className="representative-photo-wrap">
              <div className="representative-photo">
                <img src="/representative.png" alt="代表 藤原恵津子" />
              </div>
              <span className="representative-photo-frame" aria-hidden="true"></span>
            </div>
            <span className="representative-label">Representative</span>
            <p className="representative-name">代表　藤原恵津子</p>
          </div>
          <div className="about-text">
            <h3>一般社団法人日本アウェイクニング協会</h3>
            <p>
              日本アウェイクニング協会は、成果や比較に偏った社会の在り方を見直し、和の精神を基盤に人が本来持つ価値と可能性を引き出すことを目的としています。
            </p>
            <p>
              父・母・子の三位一体を基盤に家庭・教育・社会をつなぎ、違いを認め合い強みを活かす共創社会を育み、充足感をベースにした誰もが幸福な社会を目指しています。
            </p>
          </div>
        </div>
        <div className="about-payment">
          <span className="about-payment-label">Payment</span>
          <h4>お支払いについて</h4>
          <ul className="about-payment-list">
            <li>お支払い方法：クレジットカード決済（VISA / Mastercard / JCB / AMEX）</li>
            <li>決済はUnivaPayによる安全なカード決済システムを利用しています</li>
            <li>分割払いにも対応しております</li>
            <li>クレジットカード決済はお申込み時に即時決済となります</li>
          </ul>
          <p className="about-payment-links">
            <a href="/legal">特定商取引法に基づく表記</a>
            <span> ／ </span>
            <a href="/privacy">プライバシーポリシー</a>
          </p>
        </div>
      </div>
    </section>
  );
}
