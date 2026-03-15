import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Programs from "@/components/Programs";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>アウェイクニング協会 | 家庭から社会を変える</title>
        <meta
          name="description"
          content="一般社団法人アウェイクニング協会 - 父親・母親・子供の3人一体で社会を変えていく。みらいのたね学園、母子共創アカデミー、能力開花の3事業で日本の精神性を次世代へつなぎます。"
        />
        <meta
          name="keywords"
          content="アウェイクニング協会,みらいのたね学園,不登校支援,母子共創アカデミー,Happy Mothers,能力開花,子育て支援,オンライン学園,藤原恵津子,Coach FIORE"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://awakening.or.jp/" />
        <link rel="icon" href="/favicon.ico" />

        {/* OGP */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="アウェイクニング協会 | 家庭から社会を変える" />
        <meta
          property="og:description"
          content="父親・母親・子供の3人一体で社会を変えていく。みらいのたね学園、母子共創アカデミー、能力開花の3事業を展開。"
        />
        <meta property="og:site_name" content="一般社団法人アウェイクニング" />
        <meta property="og:url" content="https://awakening.or.jp/" />
        <meta property="og:locale" content="ja_JP" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="アウェイクニング協会 | 家庭から社会を変える" />
        <meta
          name="twitter:description"
          content="父親・母親・子供の3人一体で社会を変えていく。みらいのたね学園、母子共創アカデミー、能力開花の3事業を展開。"
        />
      </Head>

      <a href="#main-content" className="skip-link">
        メインコンテンツへスキップ
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Philosophy />
        <Programs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
