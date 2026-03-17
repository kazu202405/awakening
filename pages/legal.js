import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Legal() {
  return (
    <>
      <Head>
        <title>特定商取引法に基づく表記 | 日本アウェイクニング協会</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="legal-page">
        <div className="container">
          <h1 className="legal-title">特定商取引法に基づく表記</h1>

          <table className="legal-table">
            <tbody>
              <tr>
                <th>販売事業者名</th>
                <td>一般社団法人日本アウェイクニング協会</td>
              </tr>
              <tr>
                <th>代表責任者</th>
                <td>藤原恵津子</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>※要記載（法人登記上の住所を記載してください）</td>
              </tr>
              <tr>
                <th>電話番号</th>
                <td>請求があった場合に遅滞なく開示いたします。<br />請求先：※要記載（メールアドレス）</td>
              </tr>
              <tr>
                <th>メールアドレス</th>
                <td>※要記載</td>
              </tr>
              <tr>
                <th>販売URL</th>
                <td>https://awakening.or.jp/</td>
              </tr>
              <tr>
                <th>販売価格</th>
                <td>各商品・サービスの販売ページに記載（すべて税込価格で表示）</td>
              </tr>
              <tr>
                <th>商品代金以外の必要料金</th>
                <td>
                  消費税：販売価格に含む<br />
                  インターネット接続に必要な通信費はお客様のご負担となります<br />
                  銀行振込の場合の振込手数料はお客様のご負担となります
                </td>
              </tr>
              <tr>
                <th>お支払い方法</th>
                <td>クレジットカード決済（VISA / Mastercard / JCB / AMEX）、銀行振込</td>
              </tr>
              <tr>
                <th>お支払い時期</th>
                <td>
                  クレジットカード決済：お申込み時に即時決済<br />
                  銀行振込：お申込み後7日以内<br />
                  月額サービス：毎月所定の日に自動課金
                </td>
              </tr>
              <tr>
                <th>商品の引渡し時期</th>
                <td>決済確認後、各サービスの開始日に準じて提供いたします。詳細は各販売ページをご確認ください。</td>
              </tr>
              <tr>
                <th>月額サービス（継続課金）について</th>
                <td>
                  みらいのたね学園（月額25,000円・税込）は継続課金サービスです。<br />
                  ・最低利用期間：なし<br />
                  ・課金サイクル：毎月、初回決済日と同日に自動課金<br />
                  ・解約方法：メール（※要記載）にてご連絡ください<br />
                  ・解約期限：当月15日までのお申し出で翌月から課金停止。当月分の日割り返金はいたしません。
                </td>
              </tr>
              <tr>
                <th>返品・キャンセルについて</th>
                <td>
                  通信販売のため、クーリングオフ制度は適用されません。<br /><br />
                  【サービス提供開始前のキャンセル】<br />
                  お申込みから8日以内にメール（※要記載）にてご連絡ください。
                  お支払い済みの代金は全額返金いたします（銀行振込の場合、振込手数料はお客様負担）。
                  返金時期：キャンセル受付後14営業日以内。<br /><br />
                  【サービス提供開始後】<br />
                  デジタルコンテンツ・オンラインサービスの性質上、
                  サービス提供開始後のお客様都合による返品・返金はお受けしておりません。
                </td>
              </tr>
              <tr>
                <th>動作環境</th>
                <td>
                  オンラインサービス：パソコン、スマートフォン、タブレット<br />
                  推奨ブラウザ：Google Chrome、Safari、Microsoft Edge の最新版<br />
                  安定したインターネット接続環境が必要です
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}
