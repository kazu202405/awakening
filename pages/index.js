import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concerns from "@/components/Concerns";
import Programs from "@/components/Programs";
import Philosophy from "@/components/Philosophy";
import Voices from "@/components/Voices";
import CtaBanner from "@/components/CtaBanner";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>日本アウェイクニング協会 | お子さんの可能性を信じるあなたへ</title>
        <meta
          name="description"
          content="和の精神性を軸に能力開花を推進する一般社団法人日本アウェイクニング協会。能力開花推進事業部、みらいのたね学園、母子共創アカデミーの3事業で、一人ひとりの可能性を開きます。"
        />
        <meta
          name="keywords"
          content="日本アウェイクニング協会,みらいのたね学園,不登校支援,母子共創アカデミー,ハッピーマザーズクラブ,能力開花,子育て支援,オンライン学園,無料相談会"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://awakening.or.jp/" />
        <link rel="icon" href="/favicon.ico" />

        {/* OGP */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="日本アウェイクニング協会 | お子さんの可能性を信じるあなたへ" />
        <meta
          property="og:description"
          content="不登校・子育てのお悩みに寄り添います。みらいのたね学園、母子共創アカデミー、能力開花推進の3事業を展開。無料相談会も毎月開催。"
        />
        <meta property="og:site_name" content="一般社団法人日本アウェイクニング協会" />
        <meta property="og:url" content="https://awakening.or.jp/" />
        <meta property="og:locale" content="ja_JP" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="日本アウェイクニング協会 | お子さんの可能性を信じるあなたへ" />
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
        <Philosophy />
        <Voices />
        <CtaBanner />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
