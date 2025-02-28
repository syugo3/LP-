import React, { useEffect, useState } from 'react';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: 'ReAliceはどんな会社ですか？',
    answer: 'ReAliceは、AIを活用した次世代の人材マッチングプラットフォームを開発・運営する企業です。技術力とイノベーションを重視し、エンジニアが最大限の力を発揮できる環境づくりに注力しています。社内では最新技術のキャッチアップを推奨し、技術共有会や勉強会も定期的に開催しています。また、リモートワークを基本とし、柔軟な働き方を実現しています。'
  },
  {
    question: '開発環境や使用技術を教えてください',
    answer: 'フロントエンドはReact/TypeScript、バックエンドはGo言語を中心に、マイクロサービスアーキテクチャを採用しています。インフラはAWS/GCPを利用し、Kubernetesによるコンテナオーケストレーションを実施。AI/ML基盤にはPythonを使用し、最新のアルゴリズムを実装しています。また、GitHubによるバージョン管理、CIツールによる自動テスト・デプロイを導入しています。'
  },
  {
    question: '評価制度や昇給の仕組みはどうなっていますか？',
    answer: '四半期ごとの目標設定と評価を行い、技術力、プロジェクト貢献度、チーム貢献度を総合的に評価します。年2回の昇給機会があり、スキルアップに応じた報酬アップを実現。また、ストックオプション制度も導入しており、会社の成長と共に個人の資産形成も可能です。技術書籍購入費用の補助や、カンファレンス参加費用の支援制度もあります。'
  },
  {
    question: '入社後のキャリアパスについて教えてください',
    answer: '技術スペシャリストとしてのキャリアと、テックリードやマネージャーとしてのキャリアの両方を用意しています。入社後は3ヶ月間の技術研修があり、その後はメンター制度を活用しながら実プロジェクトに参加します。社内公募制度があり、興味のある領域にチャレンジすることも可能です。また、技術ブログの執筆やテックカンファレンスでの登壇機会も積極的に提供しています。'
  },
  {
    question: '働き方や福利厚生について教えてください',
    answer: 'フルリモートワークを基本とし、コアタイムなしのフレックスタイム制を採用。週1回のオフィスデーでチーム活動を行います。福利厚生として、各種保険完備、選択型カフェテリアプラン、住宅手当、通信費補助などを用意。また、副業・兼業も可能です（事前届出制）。年間休日125日、有給休暇は入社半年後に10日付与、その後毎年20日付与されます。'
  },
  {
    question: '選考プロセスはどのような流れですか？',
    answer: '選考は、書類選考→カジュアル面談→技術面接→カルチャー面接→最終面接の流れで進みます。技術面接では実践的なコーディング課題や設計に関するディスカッションを行います。面接はすべてオンラインで実施可能です。内定後は、入社時期の調整や条件面の相談にも柔軟に対応します。選考期間は通常2-3週間程度です。'
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