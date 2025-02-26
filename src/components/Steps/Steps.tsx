import React, { useEffect, useRef } from 'react';
import styles from './Steps.module.css';
import step1 from '../../assets/images/step1.png';
import step2 from '../../assets/images/step2.png';
import step3 from '../../assets/images/step3.png';
import step4 from '../../assets/images/step4.png';

export const Steps: React.FC = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(`.${styles.stepItem}`).forEach((item) => {
              item.classList.add(styles.visible);
            });
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.steps}>
      <div className={styles.container}>
        <h2 className={styles.title}>ご利用の流れ</h2>
        <p className={styles.description}>
          応募意欲がなくても年収予測やスキル偏差値をご利用いただくことも可能です。
          <br />
          まずはお気軽にご登録ください。
        </p>

        <div className={styles.stepList} ref={stepsRef}>
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
            <h3>企業からオファーが届く</h3>
            <p>スキル偏差値が高いエンジニアにオファーが届く</p>
          </div>

          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>STEP 4</div>
            <div className={styles.stepIcon}>
              <img src={step4} alt="握手" />
            </div>
            <h3>内定が出る</h3>
            <p>人気のテック企業から内定</p>
          </div>
        </div>
      </div>
    </section>
  );
}; 