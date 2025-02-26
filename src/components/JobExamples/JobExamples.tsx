import React from 'react';
import styles from './JobExamples.module.css';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';
import avatar4 from '../../assets/images/avatar4.png';

export const JobExamples: React.FC = () => {
  return (
    <section className={styles.jobExamples}>
      <div className={styles.container}>
        <h2 className={styles.title}>転職事例</h2>
        <p className={styles.subtitle}>ReAliceに応募された方の事例をご紹介</p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.profile}>
              <img src={avatar1} alt="Profile" className={styles.avatar} />
              <div className={styles.info}>
                <h3>フロントエンドエンジニア</h3>
                <p>Aさん 37歳</p>
              </div>
            </div>
            <div className={styles.salary}>
              <div className={styles.before}>
                <span>転職前</span>
                <div className={styles.amount}>年収750万円</div>
              </div>
              <div className={styles.arrow}>
                <span className={styles.increase}>150万円アップ</span>
              </div>
              <div className={styles.after}>
                <span>転職後</span>
                <div className={styles.amount}>年収900万円</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.profile}>
              <img src={avatar2} alt="Profile" className={styles.avatar} />
              <div className={styles.info}>
                <h3>バックエンドエンジニア</h3>
                <p>Bさん 26歳</p>
              </div>
            </div>
            <div className={styles.salary}>
              <div className={styles.before}>
                <span>転職前</span>
                <div className={styles.amount}>年収850万円</div>
              </div>
              <div className={styles.arrow}>
                <span className={styles.increase}>230万円アップ</span>
              </div>
              <div className={styles.after}>
                <span>転職後</span>
                <div className={styles.amount}>年収1,080万円</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.profile}>
              <img src={avatar3} alt="Profile" className={styles.avatar} />
              <div className={styles.info}>
                <h3>機械学習エンジニア</h3>
                <p>Cさん 33歳</p>
              </div>
            </div>
            <div className={styles.salary}>
              <div className={styles.before}>
                <span>転職前</span>
                <div className={styles.amount}>年収400万円</div>
              </div>
              <div className={styles.arrow}>
                <span className={styles.increase}>174万円アップ</span>
              </div>
              <div className={styles.after}>
                <span>転職後</span>
                <div className={styles.amount}>年収574万円</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.profile}>
              <img src={avatar4} alt="Profile" className={styles.avatar} />
              <div className={styles.info}>
                <h3>iOSエンジニア</h3>
                <p>Dさん 31歳</p>
              </div>
            </div>
            <div className={styles.salary}>
              <div className={styles.before}>
                <span>転職前</span>
                <div className={styles.amount}>年収600万円</div>
              </div>
              <div className={styles.arrow}>
                <span className={styles.increase}>100万円アップ</span>
              </div>
              <div className={styles.after}>
                <span>転職後</span>
                <div className={styles.amount}>年収700万円</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 