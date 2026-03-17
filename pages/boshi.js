import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Boshi() {
  return (
    <>
      <Head>
        <title>母子共創アカデミー事業部 | 日本アウェイクニング協会</title>
        <meta
          name="description"
          content="母親の能力開花を目的としたコミュニティと講座。ハッピーマザーズクラブ、母親講座、個人カウンセリングを通じて、お母さんが自分らしく生き、子供の可能性を伸ばす場を提供します。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="boshi-page">
        <section className="boshi-hero">
          <div className="container">
            <span className="boshi-label">Mother &amp; Child Co-Creation</span>
            <h1 className="boshi-title">母子共創アカデミー事業部</h1>
            <p className="boshi-subtitle">
              ハッピーマザーズクラブ / 母親講座 / 個人カウンセリング
            </p>
          </div>
        </section>

        <section className="boshi-section">
          <div className="container">
            <h2 className="boshi-heading">母親の能力開花が、家庭を変える</h2>
            <p className="boshi-text">
              母子共創アカデミー事業部は、母親の能力開花を目的としたコミュニティと講座を運営しています。
              ハッピーマザーズクラブ、母親講座をはじめとする各種講座、個人カウンセリングを通じて、
              お母さんが自分らしく生き、子供の可能性を伸ばす場を提供します。
            </p>
          </div>
        </section>

        <section className="boshi-section boshi-services">
          <div className="container">
            <h2 className="boshi-heading">サービス内容</h2>
            <div className="boshi-cards">
              <div className="boshi-card">
                <h3>ハッピーマザーズクラブ</h3>
                <p>
                  同じ想いを持つお母さんたちが集まるコミュニティ。
                  悩みを共有し、励まし合いながら、共に成長していける安心の場です。
                </p>
              </div>
              <div className="boshi-card">
                <h3>母親講座</h3>
                <p>
                  子どもを変えようとするのではなく、まず自分が変わる。
                  和の精神性に基づいた子育てと自己成長のための講座です。
                </p>
              </div>
              <div className="boshi-card">
                <h3>個人カウンセリング</h3>
                <p>
                  一対一で丁寧に向き合い、あなたの悩みや課題に寄り添います。
                  一人で抱え込まず、まずはお話しください。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="boshi-section boshi-cta-section">
          <div className="container">
            <h2 className="boshi-heading">まずは気軽にご相談ください</h2>
            <p className="boshi-text">
              無料相談会を毎月開催しています。<br />
              お気軽にお問い合わせください。
            </p>
            <a href="/#contact" className="boshi-cta-btn">
              お問い合わせはこちら
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
