import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnivaPayButton from "@/components/UnivaPayButton";

// UnivaPay審査通過後、ここにアプリトークンを設定
const UNIVAPAY_APP_ID = "";

export default function PaymentNouryoku() {
  return (
    <>
      <Head>
        <title>お申し込み - 能力開花推進事業部 | 日本アウェイクニング協会</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="payment-page">
        <div className="container">
          <div className="payment-header">
            <span className="payment-label">能力開花推進事業部（コーチ・フィオーレ）</span>
            <h1 className="payment-title">お申し込み</h1>
          </div>

          <div className="payment-content">
            <div className="payment-plans">
              <div className="payment-plan">
                <h3 className="plan-name">定例セミナー</h3>
                <p className="plan-desc">和の精神性を軸にしたセミナー（京阪神で月1回開催）</p>
                <div className="plan-price">
                  <span className="price-amount">6,000</span>
                  <span className="price-unit">円（税込）/ 回</span>
                </div>
                <ul className="plan-features">
                  <li>和の精神性に基づいたコミュニケーション力向上</li>
                  <li>組織変革・人材育成のヒント</li>
                  <li>参加者同士のネットワーキング</li>
                </ul>
                <UnivaPayButton
                  appId={UNIVAPAY_APP_ID}
                  amount={6000}
                  productName="定例セミナー"
                  productDescription="和の精神性を軸にしたセミナー"
                  className="plan-btn plan-btn-nouryoku"
                />
              </div>

              <div className="payment-plan">
                <h3 className="plan-name">企業研修・講演会</h3>
                <p className="plan-desc">企業・団体向けのカスタマイズ研修・講演</p>
                <div className="plan-price">
                  <span className="price-amount">お見積り</span>
                </div>
                <ul className="plan-features">
                  <li>御社の課題に合わせたプログラム設計</li>
                  <li>日本の精神性を活かした組織づくり</li>
                  <li>オンライン・対面どちらも対応可</li>
                </ul>
                <a href="/#contact" className="plan-btn plan-btn-nouryoku">
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
