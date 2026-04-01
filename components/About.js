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
        </div>
        <div className="about-payment">
          <h4>お支払いについて</h4>
          <p>お支払い方法：クレジットカード決済（VISA / Mastercard / JCB / AMEX）</p>
          <p>決済はUnivaPayによる安全なカード決済システムを利用しています</p>
          <p>分割払いにも対応しております</p>
          <p>クレジットカード決済はお申込み時に即時決済となります</p>
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
