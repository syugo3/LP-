import React, { useEffect } from 'react';
import styles from './Steps.module.css';
import step1 from '../../assets/images/step1.png';
import step2 from '../../assets/images/step2.png';
import step3 from '../../assets/images/step3.png';
import step4 from '../../assets/images/step4.png';

const stepDetails = [
  {
    title: 'STEP 1: GitHub連携で簡単登録',
    details: [
      'GitHubアカウントでワンクリック登録',
      'コミット履歴やリポジトリ情報を自動解析',
      'プライベートリポジトリは非公開設定可能',
      '登録完了後すぐにスキル偏差値が表示されます'
    ]
  },
  {
    title: 'STEP 2: プロフィール充実で魅力アップ',
    details: [
      '経験したプロジェクトの詳細を記入',
      '得意な技術スタックをアピール',
      'ポートフォリオやブログのリンクを追加',
      '希望条件や転職時期を設定可能'
    ]
  },
  {
    title: 'STEP 3: ReAliceからのオファー',
    details: [
      'ReAliceからスキルマッチしたオファーが届く',
      'オファー内容の詳細を確認',
      'オファー後のカウンセリングを実施',
      '非公開での求職活動も可能'
    ]
  },
  {
    title: 'STEP 4: 選考～内定',
    details: [
      'オンラインでの面談調整が可能',
      'キャリアアドバイザーによる面接対策',
      '条件交渉もサポート',
      '内定後のキャリア相談も継続的に実施'
    ]
  }
];

export const Steps: React.FC = () => {
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
        threshold: 0.2
      }
    );

    const elements = document.querySelectorAll(`.${styles.stepItem}, .${styles.detailsSection}`);
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.steps}>
      <div className={styles.container}>
        <h2 id="benefitsTitle" className={styles.title}>
          ご利用の流れ
        </h2>
        <p className={styles.description}>
          応募意欲がなくても年収予測やスキル偏差値をご利用いただくことも可能です。
          <br />
          まずはお気軽にご登録ください。
        </p>

        <div className={styles.stepList}>
          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>STEP 1</div>
            <div className={styles.stepIcon}>
              <img src={step1} alt="ノートパソコン" />
            </div>
            <h3>GitHub連携で利用開始</h3>
            <p>GitHub連携であなたのスキルを自動で偏差値化</p>
          </div>

          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>STEP 2</div>
            <div className={styles.stepIcon}>
              <img src={step2} alt="鉛筆とペン" />
            </div>
            <h3>スキル偏差値を確認</h3>
            <p>プロフィール記入で追加アピールも可能</p>
          </div>

          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>STEP 3</div>
            <div className={styles.stepIcon}>
              <img src={step3} alt="チャットアイコン" />
            </div>
            <h3>オファーが届く</h3>
            <p>スキル偏差値が高いエンジニアにオファーが届く</p>
          </div>

          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>STEP 4</div>
            <div className={styles.stepIcon}>
              <img src={step4} alt="握手" />
            </div>
            <h3>内定が出る</h3>
            <p>ReAliceから内定が出る</p>
          </div>
        </div>

        <div className={styles.detailsSection}>
          <h2 id="stepsTitle" className={styles.detailsTitle}>各ステップの詳細</h2>
          <div className={styles.detailsList}>
            {stepDetails.map((step, index) => (
              <div key={index} className={styles.detailsItem}>
                <h4 className={styles.detailsItemTitle}>{step.title}</h4>
                <ul className={styles.detailsItemList}>
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 