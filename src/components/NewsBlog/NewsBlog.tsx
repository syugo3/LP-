import React from 'react';
import styles from './NewsBlog.module.css';
// 画像のインポート
import newsImage1 from '../../assets/images/news/ai_matching.jpg';
import blogImage1 from '../../assets/images/news/microservices.jpg';
import newsImage2 from '../../assets/images/news/growth_chart.jpg';

interface NewsItem {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export const NewsBlog: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      category: 'ニュース',
      date: '2024.03.15',
      title: '新しい人材マッチングAIエンジンをリリース',
      description: '最新のAI技術を活用した、より精度の高いマッチングシステムの運用を開始しました。',
      image: newsImage1
    },
    {
      category: '技術ブログ',
      date: '2024.03.10',
      title: 'マイクロサービスアーキテクチャの実践的アプローチ',
      description: '当社のバックエンド開発チームが採用している最新のアーキテクチャについて解説します。',
      image: blogImage1
    },
    {
      category: 'ニュース',
      date: '2024.03.05',
      title: '年間利用企業数が1000社を突破',
      description: '多くの企業様にご利用いただき、エンジニアマッチング件数も順調に増加しています。',
      image: newsImage2
    }
  ];

  return (
    <section className={styles.newsBlogSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>News & Blog</h2>
        <p className={styles.subtitle}>最新のニュースと技術ブログをご紹介</p>
        
        <div className={styles.newsGrid}>
          {newsItems.map((item, index) => (
            <article key={index} className={styles.newsCard}>
              <div className={styles.imageContainer}>
                <img src={item.image} alt="" className={styles.image} />
                <span className={styles.category}>{item.category}</span>
              </div>
              <div className={styles.content}>
                <time className={styles.date}>{item.date}</time>
                <h3 className={styles.newsTitle}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <a href="#" className={styles.readMore}>
                  続きを読む
                  <span className={styles.arrow}>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.moreNews}>
          <a href="/news" className={styles.moreButton}>
            ニュース・ブログ一覧へ
          </a>
        </div>
      </div>
    </section>
  );
}; 