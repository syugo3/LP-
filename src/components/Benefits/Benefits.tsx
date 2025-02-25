import React from 'react';
import styles from './Benefits.module.css';

export const Benefits: React.FC = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.concernsSection}>
        <div className={styles.concernsContainer}>
          <div className={styles.concernsContent}>
            <img 
              src="/worried-engineer.png" 
              alt="悩むエンジニア" 
              className={styles.concernsImage} 
            />
            <div className={styles.concernsText}>
              <h2>こんなことに<span className={styles.highlight}>悩んで</span>いませんか？</h2>
              <ul>
                <li>転職したいけど、自分の技術力を評価してくれる会社が分からない</li>
                <li>自分の希望年収に見合う会社を見つけたい</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h3>スキル偏差値とは？</h3>
          <ul>
            <li>GitHub連携でスキルを偏差値化</li>
            <li>開発言語ごとの偏差値も分かる</li>
            <li>OSS活動をするほど偏差値が上がる</li>
          </ul>
          <button className={styles.button}>GitHub連携でスキル偏差値を見る</button>
        </div>

        <div className={styles.content}>
          <h3>年収予測機能とは？</h3>
          <ul>
            <li>スキル偏差値と連動し想定年収を算出</li>
            <li>職種や経験年数なども年収予測に加味</li>
            <li>自分の市場価値が分かる</li>
          </ul>
          <button className={styles.button}>GitHub連携で年収予測を見る</button>
        </div>

        <div className={styles.content}>
          <h3>発信力レベル機能とは？</h3>
          <ul>
            <li>テキストメディアと連携し情報発信力をスコア化</li>
            <li>エンジニアのアウトプットのレベルを1〜10段階で診断</li>
            <li>継続的な情報発信のモチベーションに！</li>
          </ul>
          <button className={styles.button}>登録して発信力レベルを算出</button>
        </div>

        <div className={styles.content}>
          <h3>ユーザーサクセス面談とは？</h3>
          <ul>
            <li>エンジニアの転職・キャリアパスに詳しい専門のスタッフがサポート</li>
            <li>キャリアコーチ、求人紹介、入社後の活躍支援までトータル支援。</li>
            <li>面談は何度でも無料で、事前準備は不要</li>
          </ul>
          <button className={styles.button}>ユーザーサクセス面談に申し込む</button>
        </div>
      </div>
    </section>
  );
}; 