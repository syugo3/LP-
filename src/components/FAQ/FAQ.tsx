import React, { useEffect, useState } from 'react';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: 'スキル偏差値はどのように算出されますか？',
    answer: 'GitHubのコミット履歴、プロジェクト数、スター数などの様々なデータを分析し、独自のアルゴリズムで算出しています。他のエンジニアとの相対的な位置づけを知ることができます。'
  },
  {
    question: '年収予測は正確ですか？',
    answer: 'スキル偏差値、経験年数、技術スタック、市場の需要などの要因を考慮して算出しています。ただし、あくまで目安となる金額であり、実際の年収は企業や役割によって変動する可能性があります。'
  },
  {
    question: 'ユーザーサクセス面談は有料ですか？',
    answer: '面談は完全無料です。回数制限もなく、キャリアに関する相談を何度でも行うことができます。また、面談の事前準備も必要ありません。'
  },
  {
    question: '登録後すぐに企業からスカウトは来ますか？',
    answer: 'プロフィールの完成度やスキル偏差値によって異なりますが、一般的に登録後1週間程度でスカウトが届き始めます。GitHubとの連携やプロフィールの充実により、より多くのスカウトを受け取ることができます。'
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