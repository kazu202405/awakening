import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Training() {
  const challenges = [
    { num: "01", title: "育てた人財が、定着しない。", desc: "採用と教育のコストが膨らみ続け、現場の疲弊感だけが残っていく。" },
    { num: "02", title: "理念が、現場まで届かない。", desc: "部署ごとに動きが分断し、組織として一つの方向に進めない。" },
    { num: "03", title: "次の経営を担う人財が、いない。", desc: "意思決定が経営者に集中し、自走する組織構造に変えられない。" },
    { num: "04", title: "対話の質が、上がらない。", desc: "心理的安全性のないまま会議が進み、本音と本気が引き出せない。" },
  ];

  const services = [
    {
      num: "01",
      label: "Training",
      title: "企業研修",
      lead: "貴社専用に設計し、参加者一人ひとりの行動変容を起こす。",
      desc: "NLP・エマジェネティクスなど脳科学ベースの心理学を活用し、御社の課題と組織風土に合わせてカスタマイズ。学びが現場に定着するまで設計します。",
      meta: [
        { label: "期間", value: "1日〜数ヶ月" },
        { label: "形式", value: "対面・オンライン" },
        { label: "対象", value: "全階層対応" },
      ],
    },
    {
      num: "02",
      label: "Lecture",
      title: "講演会",
      lead: "和の精神性を、参加者の心に届く言葉で伝える。",
      desc: "経営者団体・業界団体・社内イベント・キックオフなどで、組織論と人財論を語ります。参加者の意識が動き、その後の会話が変わる時間を設計します。",
      meta: [
        { label: "時間", value: "60〜120分" },
        { label: "形式", value: "対面・オンライン" },
        { label: "対象", value: "経営者・社員" },
      ],
    },
    {
      num: "03",
      label: "Coaching",
      title: "経営者・幹部コーチング",
      lead: "意思決定の質を、在り方から変える1対1セッション。",
      desc: "経営者ご本人の内側が変わることで、組織全体が動き始めます。本音で話せる場を継続的に持つことで、判断の精度と人間的な厚みが育ちます。",
      meta: [
        { label: "頻度", value: "月2回 × 3ヶ月〜" },
        { label: "形式", value: "対面・オンライン" },
        { label: "対象", value: "経営者・幹部" },
      ],
    },
    {
      num: "04",
      label: "Consulting",
      title: "組織変革コンサルティング",
      lead: "理念から制度まで、共創型組織への移行を伴走する。",
      desc: "理念・ビジョンの言語化、組織診断、中期計画策定、評価制度・対話設計まで。単発の施策ではなく、組織が自走するまで中長期で並走します。",
      meta: [
        { label: "期間", value: "6ヶ月〜" },
        { label: "形式", value: "定例伴走" },
        { label: "対象", value: "経営層・人事" },
      ],
    },
  ];

  const flow = [
    { step: "01", label: "Initial Contact", duration: "即日対応", title: "お問い合わせ", desc: "フォームより貴社のご状況・ご要望をお知らせください。担当より24時間以内にご連絡いたします。" },
    { step: "02", label: "Discovery", duration: "1週間以内", title: "ヒアリング", desc: "オンラインまたは対面で、貴社の課題・目的・組織の状況を丁寧にお伺いします（無料）。" },
    { step: "03", label: "Design", duration: "1〜2週間", title: "プログラム設計", desc: "ヒアリング内容をもとに、貴社専用のカリキュラムと詳細な見積書をご提案します。" },
    { step: "04", label: "Delivery", duration: "個別設計", title: "実施", desc: "研修・講演・コーチングを実施。対面・オンラインいずれも対応。各セッションごとに状況を共有します。" },
    { step: "05", label: "Follow-up", duration: "継続支援", title: "フォローアップ", desc: "実施後の振り返りミーティングと、現場定着に向けた継続支援を行います。" },
  ];

  const approach = [
    { num: "I", title: "和の精神性 × 脳科学", desc: "日本古来の精神性と、NLP・エマジェネティクスなど最新の脳科学・心理学を融合。理念と科学の両輪で、人と組織の本質的な変化を生み出します。" },
    { num: "II", title: "共創型人財開発", desc: "トップダウンの教育ではなく、互いの強みを引き出し活かし合う共創型のプロセスを設計。現場が主体的に動き続ける組織文化を育てます。" },
    { num: "III", title: "在り方からの変革", desc: "スキルだけでなく、リーダーや現場の「在り方」に働きかけます。在り方が変わることで、行動・関係性・成果が連鎖的に変わります。" },
  ];

  const pricingFactors = [
    { label: "Scale", title: "受講規模", desc: "5名のチームから、全社員研修まで対応可能。" },
    { label: "Duration", title: "期間・回数", desc: "単発講演から、複数年にわたる伴走まで設計。" },
    { label: "Customization", title: "カスタマイズ度", desc: "標準プログラムから、完全オーダーメイドまで。" },
    { label: "Format", title: "実施形式", desc: "対面・オンライン・ハイブリッドに柔軟対応。" },
  ];

  const credentials = [
    { cat: "NLP", items: ["米国NLP協会認定トレーナー", "NLPコーチ＆カウンセラー"] },
    { cat: "Brain Science", items: ["エマジェネティクストレーナー課程修了", "アクティブブレインインストラクター"] },
    { cat: "Therapy", items: ["ヒプノセラピスト"] },
  ];

  return (
    <>
      <Head>
        <title>法人研修・講演・コーチング | 一般社団法人日本アウェイクニング協会</title>
        <meta
          name="description"
          content="一般社団法人日本アウェイクニング協会が提供する法人向けサービス。和の精神性とNLP・エマジェネティクスを活用した企業研修、経営者コーチング、組織変革コンサルティングで、共創型組織づくりを支援します。"
        />
        <meta
          name="keywords"
          content="法人研修,企業研修,経営者コーチング,組織変革,リーダーシップ研修,理念浸透,共創型組織,日本アウェイクニング協会"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://awakening.or.jp/training" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="法人研修・講演・コーチング | 一般社団法人日本アウェイクニング協会" />
        <meta property="og:description" content="和の精神性をベースとした共創型人財開発。企業研修・講演・経営者コーチング・組織変革支援。" />
        <meta property="og:url" content="https://awakening.or.jp/training" />
      </Head>

      <Header />
      <main className="training-page">
        {/* Hero */}
        <section className="training-hero">
          <div className="container">
            <div className="training-hero-mark" aria-hidden="true">
              <span></span>
              <span></span>
            </div>
            <span className="training-eyebrow">For Corporate</span>
            <h1 className="training-hero-title">
              和の精神性で、<br />組織を強くする。
            </h1>
            <p className="training-hero-lead">
              経営者・人事担当者のための、共創型人財開発プログラム。<br />
              一般社団法人日本アウェイクニング協会が、研修・講演・コーチング・組織変革を通じて、貴社の人と組織の可能性を引き出します。
            </p>
            <div className="training-hero-cta">
              <a href="#training-contact" className="training-btn-primary">無料でご相談する</a>
              <a href="#training-services" className="training-btn-secondary">サービスを見る</a>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="training-section training-challenges">
          <div className="container">
            <div className="training-challenges-head">
              <span className="training-section-label training-section-label-light">Challenges</span>
              <h2 className="training-challenges-title">
                経営者の、<br />声にできない悩み。
              </h2>
              <p className="training-challenges-sub">
                次のような課題は、現場のスキル不足ではなく、<br />
                組織の「在り方」に原因があります。
              </p>
            </div>
            <ul className="training-challenge-list">
              {challenges.map((c) => (
                <li key={c.num} className="training-challenge-row">
                  <span className="training-challenge-num" aria-hidden="true">{c.num}</span>
                  <div className="training-challenge-body">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                  <span className="training-challenge-line" aria-hidden="true"></span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Approach */}
        <section className="training-section training-approach">
          <div className="container">
            <div className="training-section-head">
              <span className="training-section-label">Approach</span>
              <h2 className="training-section-title">私たちのアプローチ</h2>
              <p className="training-section-sub">他にはない、3つの軸で人と組織の可能性を開きます。</p>
            </div>
            <div className="training-approach-grid">
              {approach.map((a) => (
                <article key={a.num} className="training-approach-card">
                  <span className="training-approach-num" aria-hidden="true">{a.num}</span>
                  <h3 className="training-approach-title">{a.title}</h3>
                  <p className="training-approach-desc">{a.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="training-services" className="training-section training-services">
          <div className="container">
            <div className="training-section-head">
              <span className="training-section-label">Services</span>
              <h2 className="training-section-title">提供サービス</h2>
              <p className="training-section-sub">貴社の状況・目的に応じて、4つのサービスを単独または組み合わせてご提供します。</p>
            </div>
            <div className="training-service-grid">
              {services.map((s) => (
                <article key={s.num} className="training-service-card">
                  <span className="training-service-line" aria-hidden="true"></span>
                  <div className="training-service-head">
                    <span className="training-service-num">{s.num}</span>
                    <span className="training-service-label">{s.label}</span>
                  </div>
                  <h3 className="training-service-title">{s.title}</h3>
                  <p className="training-service-lead">{s.lead}</p>
                  <p className="training-service-desc">{s.desc}</p>
                  <dl className="training-service-meta">
                    {s.meta.map((m, j) => (
                      <div key={j} className="training-service-meta-item">
                        <dt>{m.label}</dt>
                        <dd>{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href="#training-contact" className="training-service-cta">
                    このサービスを相談する
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Trainer */}
        <section className="training-section training-trainer">
          <div className="container">
            <div className="training-trainer-inner">
              <div className="training-trainer-image-wrap">
                <div className="training-trainer-image">
                  <img src="/representative.png" alt="藤原恵津子" />
                </div>
                <span className="training-trainer-image-frame" aria-hidden="true"></span>
              </div>
              <div className="training-trainer-text">
                <span className="training-section-label">Trainer</span>
                <h2 className="training-trainer-name">藤原 恵津子</h2>
                <p className="training-trainer-name-en">Etsuko Fujiwara</p>
                <p className="training-trainer-role">可能性開花トレーナー<span className="training-trainer-divider">／</span>一般社団法人日本アウェイクニング協会</p>
                <p className="training-trainer-bio">
                  専業主婦18年を経て起業し、海外へのビジネス展開も実現。脳科学・心理学・和の精神性を融合した独自のアプローチで、経営者・組織・個人の能力開花を支援。著書『幸せを叶えるコミュニケーション』。
                </p>
                <div className="training-trainer-credentials-block">
                  <h3 className="training-trainer-credentials-label">Certifications</h3>
                  <div className="training-trainer-credentials-grid">
                    {credentials.map((g) => (
                      <div key={g.cat} className="training-trainer-credentials-group">
                        <span className="training-trainer-credentials-cat">{g.cat}</span>
                        <ul>
                          {g.items.map((it) => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flow */}
        <section className="training-section training-flow">
          <div className="container">
            <div className="training-section-head">
              <span className="training-section-label">Flow</span>
              <h2 className="training-section-title">導入の流れ</h2>
            </div>
            <ol className="training-flow-list">
              {flow.map((f, i) => (
                <li key={f.step} className={`training-flow-item${i === flow.length - 1 ? " is-last" : ""}`}>
                  <div className="training-flow-marker">
                    <span className="training-flow-num">{f.step}</span>
                  </div>
                  <div className="training-flow-body">
                    <div className="training-flow-meta">
                      <span className="training-flow-label">{f.label}</span>
                      <span className="training-flow-duration">{f.duration}</span>
                    </div>
                    <h3 className="training-flow-title">{f.title}</h3>
                    <p className="training-flow-desc">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section className="training-section training-pricing">
          <div className="container">
            <div className="training-section-head">
              <span className="training-section-label">Pricing</span>
              <h2 className="training-section-title">料金について</h2>
              <p className="training-section-sub">
                内容・期間・規模に応じて、貴社専用の見積書をご提案します。
              </p>
            </div>
            <div className="training-pricing-grid">
              {pricingFactors.map((p) => (
                <div key={p.label} className="training-pricing-factor">
                  <span className="training-pricing-factor-label">{p.label}</span>
                  <h3 className="training-pricing-factor-title">{p.title}</h3>
                  <p className="training-pricing-factor-desc">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="training-pricing-note">
              <span className="training-pricing-note-mark" aria-hidden="true">●</span>
              <p>ヒアリング・ご提案・見積書のご提出まで、すべて<strong>無料</strong>でご対応いたします。</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="training-contact" className="training-cta">
          <div className="container">
            <span className="training-cta-mark" aria-hidden="true"></span>
            <span className="training-cta-eyebrow">Get Started</span>
            <h2 className="training-cta-title">
              まずは無料で、<br />ご相談ください。
            </h2>
            <p className="training-cta-text">
              貴社の課題やご要望をお伺いし、最適なプログラムをご提案します。<br />
              ヒアリング・お見積もりは無料です。
            </p>
            <a href="/payment/nouryoku" className="training-btn-primary training-btn-large">
              お問い合わせはこちら
              <span aria-hidden="true">→</span>
            </a>
            <p className="training-cta-meta">通常24時間以内にご返信いたします</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
