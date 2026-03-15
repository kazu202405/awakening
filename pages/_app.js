import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "@/styles/globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${notoSans.variable} ${notoSerif.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
