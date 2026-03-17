import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnivaPayButton from "@/components/UnivaPayButton";

// UnivaPay審査通過後、ここにアプリトークンを設定
const UNIVAPAY_APP_ID = "";

export default function PaymentBoshi() {
  return (
    <>
      <Head>
        <title>お申し込み - 母子共創アカデミー事業部 | 日本アウェイクニング協会</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="payment-page">
        <div className="container">
          <div className="payment-header">
            <span className="payment-label">母子共創アカデミー事業部</span>
            <h1 className="payment-title">お申し込み</h1>
          </div>

          <div className="payment-content">
            <div className="payment-plans">
              <div className="payment-plan">
                <h3 className="plan-name">ハッピーマザーズクラブ</h3>
                <p className="plan-desc">同じ想いを持つお母さんたちのコミュニティ</p>
                <div className="plan-price">
                  <span className="price-amount">お問い合わせ</span>
                </div>
                <ul className="plan-features">
                  <li>悩みを共有できる安心のコミュニティ</li>
                  <li>定期的な交流会・相談会</li>
                  <li>仲間と共に成長できる環境</li>
                </ul>
                <a href="/#contact" className="plan-btn plan-btn-boshi">
                  お問い合わせ
                </a>
              </div>

              <div className="payment-plan">
                <h3 className="plan-name">母親講座</h3>
                <p className="plan-desc">和の精神性に基づいた子育てと自己成長のための講座</p>
                <div className="plan-price">
                  <span className="price-amount">お問い合わせ</span>
                </div>
                <ul className="plan-features">
                  <li>母親の能力開花プログラム</li>
                  <li>子どもの可能性を伸ばす関わり方</li>
                  <li>自分らしく生きるための気づき</li>
                </ul>
                <UnivaPayButton
                  appId={UNIVAPAY_APP_ID}
                  amount={0}
                  productName="母親講座"
                  productDescription="和の精神性に基づいた子育てと自己成長のための講座"
                  className="plan-btn plan-btn-boshi"
                />
              </div>

              <div className="payment-plan">
                <h3 className="plan-name">個人カウンセリング</h3>
                <p className="plan-desc">一対一で丁寧に向き合う個別セッション</p>
                <div className="plan-price">
                  <span className="price-amount">お問い合わせ</span>
                </div>
                <ul className="plan-features">
                  <li>あなたの悩みに寄り添う個別対応</li>
                  <li>オンライン・対面どちらも対応可</li>
                  <li>初回相談は無料</li>
                </ul>
                <a href="/#contact" className="plan-btn plan-btn-boshi">
                  お問い合わせ
                </a>
              </div>
            </div>

            <div className="payment-notes">
              <h4>お支払いについて</h4>
              <ul>
                <li>お支払い方法：クレジットカード決済（VISA / Mastercard / JCB / AMEX）</li>
                <li>決済はUnivaPayによる安全なカード決済システムを利用しています</li>
                <li>分割払いにも対応しております</li>
                <li>クレジットカード決済はお申込み時に即時決済となります</li>
              </ul>
              <p className="payment-legal-link">
                <a href="/legal">特定商取引法に基づく表記</a> ／ <a href="/privacy">プライバシーポリシー</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
