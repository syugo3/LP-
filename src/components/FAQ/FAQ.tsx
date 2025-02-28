import React, { useEffect, useState } from 'react';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: 'ReAliceはどんな会社ですか？',
    answer: (
      <div>
        <p>
          ReAliceは、<strong>AIを活用した次世代の人材マッチングプラットフォーム</strong>を開発・運営する企業です。
        </p>
        <p>
          主な特徴：
        </p>
        <ul>
          <li>技術力とイノベーションを重視</li>
          <li>エンジニアが最大限の力を発揮できる環境づくり</li>
          <li>最新技術のキャッチアップを推奨</li>
          <li>技術共有会や勉強会を定期的に開催</li>
          <li>リモートワークを基本とした柔軟な働き方</li>
        </ul>
      </div>
    )
  },
  {
    question: '開発環境や使用技術を教えてください',
    answer: (
      <div>
        <p>
          <strong>フロントエンド</strong>は<strong>React/TypeScript</strong>、<strong>バックエンド</strong>は<strong>Go言語</strong>を中心に、マイクロサービスアーキテクチャを採用しています。
        </p>
        <p>
          主な開発環境：
        </p>
        <ul>
          <li>インフラ：AWS/GCP</li>
          <li>コンテナ管理：Kubernetes</li>
          <li>AI/ML基盤：Python</li>
          <li>バージョン管理：GitHub</li>
          <li>CI/CD：自動テスト・デプロイ環境完備</li>
        </ul>
      </div>
    )
  },
  {
    question: '評価制度や昇給の仕組みはどうなっていますか？',
    answer: (
      <div>
        <p>
          <strong>四半期ごとの目標設定と評価</strong>を行い、以下の観点で総合的に評価します：
        </p>
        <ul>
          <li>技術力</li>
          <li>プロジェクト貢献度</li>
          <li>チーム貢献度</li>
        </ul>
        <p>
          待遇・制度：
        </p>
        <ul>
          <li>年2回の昇給機会</li>
          <li>ストックオプション制度</li>
          <li>技術書籍購入費用の補助</li>
          <li>カンファレンス参加費用の支援</li>
        </ul>
      </div>
    )
  },
  {
    question: '入社後のキャリアパスについて教えてください',
    answer: (
      <div>
        <p>
          <strong>技術スペシャリスト</strong>と<strong>テックリード/マネージャー</strong>、両方のキャリアパスを用意しています。
        </p>
        <p>
          キャリア支援制度：
        </p>
        <ul>
          <li>3ヶ月間の技術研修</li>
          <li>メンター制度</li>
          <li>社内公募制度</li>
          <li>技術ブログの執筆機会</li>
          <li>テックカンファレンスでの登壇機会</li>
        </ul>
      </div>
    )
  },
  {
    question: '働き方や福利厚生について教えてください',
    answer: (
      <div>
        <p>
          <strong>フルリモートワーク</strong>を基本とし、<strong>フレックスタイム制</strong>を採用しています。
        </p>
        <p>
          主な福利厚生：
        </p>
        <ul>
          <li>各種保険完備</li>
          <li>選択型カフェテリアプラン</li>
          <li>住宅手当</li>
          <li>通信費補助</li>
          <li>副業・兼業可能（事前届出制）</li>
        </ul>
        <p>
          休暇制度：
        </p>
        <ul>
          <li>年間休日125日</li>
          <li>入社半年後に有給休暇10日付与</li>
          <li>その後毎年20日付与</li>
        </ul>
      </div>
    )
  },
  {
    question: '選考プロセスはどのような流れですか？',
    answer: (
      <div>
        <p>
          選考は<strong>すべてオンライン</strong>で実施可能です。
        </p>
        <p>
          選考ステップ：
        </p>
        <ul>
          <li>書類選考</li>
          <li>カジュアル面談</li>
          <li>技術面接（コーディング課題・設計ディスカッション）</li>
          <li>カルチャー面接</li>
          <li>最終面接</li>
        </ul>
        <p>
          <strong>選考期間は通常2-3週間</strong>程度です。内定後は、入社時期の調整や条件面の相談にも柔軟に対応します。
        </p>
      </div>
    )
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(styles.visible);
            }, index * 100);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const items = document.querySelectorAll(`.${styles.faqItem}`);
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>よくある質問</h2>
        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={styles.faqItem}
            >
              <div 
                className={styles.question} 
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                <span className={`${styles.icon} ${openIndex === index ? styles.open : ''}`}>
                  ▼
                </span>
              </div>
              <div className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 