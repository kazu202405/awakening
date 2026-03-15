import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concerns from "@/components/Concerns";
import Programs from "@/components/Programs";
import Voices from "@/components/Voices";
import Philosophy from "@/components/Philosophy";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>アウェイクニング協会 | お子さんの可能性を信じるあなたへ</title>
        <meta
          name="description"
          content="不登校・子育てのお悩みに寄り添う一般社団法人アウェイクニング協会。みらいのたね学園、母子共創アカデミー、能力開花推進の3事業で、親子の可能性を開きます。無料相談会も毎月開催。"
        />
        <meta
          name="keywords"
          content="アウェイクニング協会,みらいのたね学園,不登校支援,母子共創アカデミー,ハッピーマザーズクラブ,能力開花,子育て支援,オンライン学園,無料相談会"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://awakening.or.jp/" />
        <link rel="icon" href="/favicon.ico" />

        {/* OGP */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="アウェイクニング協会 | お子さんの可能性を信じるあなたへ" />
        <meta
          property="og:description"
          content="不登校・子育てのお悩みに寄り添います。みらいのたね学園、母子共創アカデミー、能力開花推進の3事業を展開。無料相談会も毎月開催。"
        />
        <meta property="og:site_name" content="一般社団法人アウェイクニング" />
        <meta property="og:url" content="https://awakening.or.jp/" />
        <meta property="og:locale" content="ja_JP" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="アウェイクニング協会 | お子さんの可能性を信じるあなたへ" />
        <meta
          name="twitter:description"
          content="不登校・子育てのお悩みに寄り添います。みらいのたね学園、母子共創アカデミー、能力開花推進の3事業を展開。無料相談会も毎月開催。"
        />
      </Head>

      <a href="#main-content" className="skip-link">
        メインコンテンツへスキップ
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Concerns />
        <Programs />
        <Voices />
        <CtaBanner />
        <Philosophy />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
