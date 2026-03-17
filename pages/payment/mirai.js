import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnivaPayButton from "@/components/UnivaPayButton";

// UnivaPay審査通過後、ここにアプリトークンを設定
const UNIVAPAY_APP_ID = "";

export default function PaymentMirai() {
  return (
    <>
      <Head>
        <title>お申し込み - みらいのたね学園 | 日本アウェイクニング協会</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="payment-page">
        <div className="container">
          <div className="payment-header">
            <span className="payment-label">みらいのたね学園</span>
            <h1 className="payment-title">お申し込み</h1>
          </div>

          <div className="payment-content">
            <div className="payment-plans">
              <div className="payment-plan">
                <h3 className="plan-name">入学金</h3>
                <p className="plan-desc">みらいのたね学園への入学時に一度だけお支払い</p>
                <div className="plan-price">
                  <span className="price-amount">8,800</span>
                  <span className="price-unit">円（税込）</span>
                </div>
                <ul className="plan-features">
                  <li>入学時の初期費用（1回のみ）</li>
                  <li>オンライン学園への参加権</li>
                  <li>メタバース（MetaLife）アカウント設定</li>
                </ul>
                <UnivaPayButton
                  appId={UNIVAPAY_APP_ID}
                  amount={8800}
                  productName="みらいのたね学園 入学金"
                  productDescription="入学時の初期費用"
                  className="plan-btn plan-btn-mirai"
                />
              </div>

              <div className="payment-plan">
                <h3 className="plan-name">月額プラン</h3>
                <p className="plan-desc">毎月の受講料（継続課金）</p>
                <div className="plan-price">
                  <span className="price-amount">25,000</span>
                  <span className="price-unit">円（税込）/ 月</span>
                </div>
                <ul className="plan-features">
                  <li>メタバースを活用したオンライン授業</li>
                  <li>自己肯定感・自己効力感を育むプログラム</li>
                  <li>学校の出席扱い対応</li>
                  <li>最低利用期間なし・いつでも解約可</li>
                </ul>
                <UnivaPayButton
                  appId={UNIVAPAY_APP_ID}
                  amount={25000}
                  productName="みらいのたね学園 月額プラン"
                  productDescription="毎月の受講料"
                  subscriptionPeriod="monthly"
                  className="plan-btn plan-btn-mirai"
                />
              </div>
            </div>

            <div className="payment-notes">
              <h4>お支払いについて</h4>
              <ul>
                <li>お支払い方法：クレジットカード決済（VISA / Mastercard / JCB / AMEX）</li>
                <li>決済はUnivaPayによる安全なカード決済システムを利用しています</li>
                <li>分割払いにも対応しております</li>
                <li>月額プランは毎月、初回決済日と同日に自動課金されます</li>
                <li>解約は当月15日までのお申し出で翌月から課金停止となります</li>
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
