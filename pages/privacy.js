import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>プライバシーポリシー | アウェイクニング協会</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="legal-page">
        <div className="container">
          <h1 className="legal-title">プライバシーポリシー</h1>

          <p className="legal-intro">
            一般社団法人アウェイクニング（以下「当協会」といいます）は、
            個人情報取扱事業者として、お客様の個人情報の重要性を認識し、
            個人情報の保護に関する法律（個人情報保護法）その他関連法令を遵守し、
            以下のとおりプライバシーポリシーを定めます。
          </p>

          <section className="legal-section">
            <h2>1. 個人情報の定義</h2>
            <p>
              個人情報とは、個人情報保護法に定める「個人情報」を指し、
              氏名、住所、電話番号、メールアドレス等、
              特定の個人を識別できる情報をいいます。
            </p>
          </section>

          <section className="legal-section">
            <h2>2. 個人情報の収集</h2>
            <p>当協会は、適法かつ公正な手段により、以下の場合に個人情報を収集することがあります。</p>
            <ul>
              <li>お問い合わせフォームからのご連絡時</li>
              <li>各種講座・学園へのお申し込み時</li>
              <li>無料相談会へのご参加申し込み時</li>
              <li>メールマガジンの登録時</li>
              <li>商品・サービスのご購入・決済時</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. 個人情報の利用目的</h2>
            <p>収集した個人情報は、以下の目的の範囲内で利用いたします。</p>
            <ul>
              <li>各種サービスの提供・運営・改善</li>
              <li>お問い合わせへの回答・対応</li>
              <li>講座・イベント・セミナー等のご案内</li>
              <li>当協会のサービス・商品に関する広告・宣伝・マーケティング</li>
              <li>メールマガジン・ダイレクトメールの送付</li>
              <li>広告効果の測定・分析</li>
              <li>サービス向上のための統計・分析（個人を特定しない形で）</li>
              <li>重要なお知らせ・契約内容変更の通知</li>
              <li>決済処理および請求に関する業務</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. 個人情報の第三者提供</h2>
            <p>
              当協会は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。
            </p>
            <ul>
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命・身体・財産の保護に必要な場合であって、本人の同意を得ることが困難な場合</li>
              <li>決済処理のために決済代行事業者へ提供する場合（提供先における個人情報の取扱いは、当該事業者のプライバシーポリシーに従います）</li>
              <li>サービス提供に必要な業務委託先への提供（適切な監督のもと、必要最小限の範囲で）</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. 個人情報の安全管理措置</h2>
            <p>
              当協会は、個人情報の漏洩、滅失、毀損等を防止するため、
              以下の安全管理措置を講じています。
            </p>
            <ul>
              <li>組織的措置：個人情報保護責任者の設置、取扱規程の整備</li>
              <li>人的措置：従業者への教育・啓発の実施</li>
              <li>技術的措置：アクセス制御、SSL暗号化通信の導入、不正アクセス防止</li>
              <li>物理的措置：機器・書類の施錠管理</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Cookie（クッキー）および外部送信について</h2>
            <p>
              当サイトでは、以下の目的でCookieおよび類似技術を使用します。
            </p>
            <h3 className="legal-subsection">利用するCookieの種類と目的</h3>
            <ul>
              <li>必須Cookie：サイトの基本機能の提供に必要なもの</li>
              <li>分析Cookie：Google Analytics等によるアクセス解析</li>
              <li>広告Cookie：広告配信事業者による興味関心に基づく広告の表示</li>
            </ul>
            <h3 className="legal-subsection">外部送信先</h3>
            <ul>
              <li>Google LLC（Google Analytics、Google広告）</li>
            </ul>
            <h3 className="legal-subsection">送信される情報</h3>
            <p>閲覧ページURL、アクセス日時、IPアドレス、Cookie識別子、端末情報等</p>
            <h3 className="legal-subsection">オプトアウト</h3>
            <p>
              ブラウザの設定によりCookieを無効にすることが可能です。
              ただし、一部のサービスが正常に利用できなくなる場合があります。
            </p>
          </section>

          <section className="legal-section">
            <h2>7. 広告配信について</h2>
            <p>
              当サイトでは、第三者配信の広告サービスを利用する場合があります。
              広告配信事業者は、お客様の興味に応じた広告を表示するために
              Cookieを使用することがあります。
              広告のパーソナライズを無効にしたい場合は、
              各広告配信事業者のオプトアウトページをご利用ください。
            </p>
          </section>

          <section className="legal-section">
            <h2>8. 個人情報の開示・訂正・利用停止・消去</h2>
            <p>
              お客様は、当協会が保有するご自身の個人情報について、
              以下の請求をすることができます。
            </p>
            <ul>
              <li>利用目的の通知</li>
              <li>開示</li>
              <li>内容の訂正・追加・削除</li>
              <li>利用の停止・消去</li>
              <li>第三者提供の停止</li>
            </ul>
            <h3 className="legal-subsection">請求方法</h3>
            <p>
              メール（※要記載）にて、氏名・連絡先・請求内容をお知らせください。
              ご本人確認のうえ、原則として10営業日以内に対応いたします。
            </p>
          </section>

          <section className="legal-section">
            <h2>9. プライバシーポリシーの改定</h2>
            <p>
              当協会は、法令の改正やサービス内容の変更に伴い、
              本ポリシーを改定することがあります。
              重要な変更がある場合は、当サイト上での掲載またはメール等により
              事前にお知らせいたします。
              改定後のポリシーは、当サイトに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <section className="legal-section">
            <h2>10. お問い合わせ窓口</h2>
            <p>
              個人情報の取扱いに関するお問い合わせ・苦情・ご相談は、
              下記までご連絡ください。
            </p>
            <p>
              個人情報取扱事業者：一般社団法人アウェイクニング<br />
              個人情報保護責任者：藤原恵津子<br />
              メール：※要記載
            </p>
          </section>

          <p className="legal-date">制定日：2026年3月15日</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
