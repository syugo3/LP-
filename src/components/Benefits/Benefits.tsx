import React, { useEffect } from 'react';
import styles from './Benefits.module.css';
import worriedEngineer from '../../assets/images/worried-engineer.png';
import skillScore from '../../assets/images/skill-score.png';
import salaryPrediction from '../../assets/images/salary-prediction.png';
import influenceLevel from '../../assets/images/influence-level.png';
import userSuccess from '../../assets/images/user-success.png';

export const Benefits: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(styles.visible);
            }, index * 200);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const cards = document.querySelectorAll(`.${styles.content}`);
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.benefits}>
      <div className={styles.concernsSection}>
        <div className={styles.concernsContainer}>
          <div className={styles.concernsContent}>
            <img 
              src={worriedEngineer} 
              alt="悩むエンジニア" 
              className={styles.concernsImage} 
            />
            <div className={styles.concernsText}>
              <h2 id="troublesTitle">
                こんなことに<span className={styles.highlight}>悩んで</span>いませんか？
              </h2>
              <ul>
                <li><span style={{ whiteSpace: 'nowrap' }}> 応募したいけど、自分の技術力を評価してくれる会社が分からない。</span></li>
                <li>自分の希望年収に見合う会社を見つけたい。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h3>スキル偏差値とは？</h3>
          <img 
            src={skillScore}
            alt="スキル偏差値の例" 
            className={styles.skillImage}
          />
          <ul>
            <li>GitHub連携でスキルを偏差値化</li>
            <li>開発言語ごとの偏差値も分かる</li>
            <li>OSS活動をするほど偏差値が上がる</li>
          </ul>
          <button className={styles.button}>GitHub連携でスキル偏差値を見る</button>
        </div>

        <div className={styles.content}>
          <h3>年収予測機能とは？</h3>
          <img 
            src={salaryPrediction}
            alt="年収予測の例" 
            className={styles.skillImage}
          />
          <ul>
            <li>スキル偏差値と連動し想定年収を算出</li>
            <li>職種や経験年数なども年収予測に加味</li>
            <li>自分の市場価値が分かる</li>
          </ul>
          <button className={styles.button}>GitHub連携で年収予測を見る</button>
        </div>

        <div className={styles.content}>
          <h3>発信力レベル機能とは？</h3>
          <img 
            src={influenceLevel}
            alt="発信力レベルの例" 
            className={styles.skillImage}
          />
          <ul>
            <li>テキストメディアと連携し情報発信力をスコア化</li>
            <li>エンジニアのアウトプットを10段階で診断</li>
            <li>継続的な情報発信のモチベーションに！</li>
          </ul>
          <button className={styles.button}>登録して発信力レベルを算出</button>
        </div>

        <div className={styles.content}>
          <h3>ユーザーサクセス面談とは？</h3>
          <img 
            src={userSuccess}
            alt="ユーザーサクセス面談の例" 
            className={styles.skillImage}
          />
          <ul>
            <li>専門スタッフがキャリアをサポート</li>
            <li>キャリアコーチから入社後支援まで完全サポート</li>
            <li>面談は何度でも無料、事前準備不要</li>
          </ul>
          <button className={styles.button}>ユーザーサクセス面談に申し込む</button>
        </div>
      </div>
    </section>
  );
}; 