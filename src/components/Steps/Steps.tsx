import React from 'react';
import styles from './Steps.module.css';

export const Steps: React.FC = () => {
  return (
    <section className={styles.steps}>
      <div className={styles.container}>
        <h2 className={styles.title}>ご利用の流れ</h2>
        <p className={styles.description}>
          転職意欲がなくても年収予測やスキル偏差値をご利用いただくことも可能です。
          <br />
          まずはお気軽にご登録ください。
        </p>

        <div className={styles.stepList}>
          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>STEP 1</div>
            <div className={styles.stepIcon}>
              <img src="/laptop-icon.png" alt="ノートパソコン" />
            </div>
            <h3>GitHub連携で利用開始</h3>
            <p>GitHub連携であなたのスキルを自動で偏差値化</p>
          </div>

          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>STEP 2</div>
            <div className={styles.stepIcon}>
              <img src="/pencil-icon.png" alt="鉛筆とペン" />
            </div>
            <h3>スキル偏差値を確認</h3>
            <p>プロフィール記入で追加アピールも可能</p>
          </div>

          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>STEP 3</div>
            <div className={styles.stepIcon}>
              <img src="/chat-icon.png" alt="チャットアイコン" />
            </div>
            <h3>企業からオファーが届く</h3>
            <p>スキル偏差値が高いエンジニアにオファーが届く</p>
          </div>

          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>STEP 4</div>
            <div className={styles.stepIcon}>
              <img src="/handshake-icon.png" alt="握手" />
            </div>
            <h3>内定が出る</h3>
            <p>人気のテック企業から内定</p>
          </div>
        </div>
      </div>
    </section>
  );
}; 