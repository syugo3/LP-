import React from 'react';
import styles from './Positions.module.css';

export const Positions: React.FC = () => {
  return (
    <section className={styles.positions}>
      <div className={styles.container}>
        <h1 className={styles.title}>募集職種</h1>
        <div className={styles.positionsList}>
          <div className={styles.positionCard}>
            <h2>フロントエンドエンジニア</h2>
            <p>最新のWeb技術を活用した開発をお任せします</p>
          </div>
          <div className={styles.positionCard}>
            <h2>バックエンドエンジニア</h2>
            <p>スケーラブルなシステム設計と実装をお任せします</p>
          </div>
          <div className={styles.positionCard}>
            <h2>インフラエンジニア</h2>
            <p>安定的なシステム運用基盤の構築をお任せします</p>
          </div>
        </div>
      </div>
    </section>
  );
}; 