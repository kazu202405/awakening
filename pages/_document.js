import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* 構造化データ (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "一般社団法人アウェイクニング",
              alternateName: "アウェイクニング協会",
              url: "https://awakening.or.jp/",
              description:
                "父親・母親・子供の3人一体で社会を変えていくことを目的とした一般社団法人。みらいのたね学園、母子共創アカデミー、能力開花の3事業を展開。",
              founder: {
                "@type": "Person",
                name: "藤原恵津子",
              },
              sameAs: [],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
