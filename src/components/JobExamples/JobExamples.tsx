import React, { useEffect } from 'react';
import styles from './JobExamples.module.css';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';
import avatar4 from '../../assets/images/avatar4.png';

interface JobExample {
  avatar: string;
  position: string;
  profile: string;
  beforeSalary: string;
  afterSalary: string;
  increase: string;
  experience: string;
  skills: string[];
}

const jobExamples: JobExample[] = [
  {
    avatar: avatar1,
    position: 'フロントエンドエンジニア',
    profile: 'Aさん 37歳',
    beforeSalary: '750万円',
    afterSalary: '900万円',
    increase: '150万円アップ',
    experience: '実務経験8年 / マネジメント経験2年',
    skills: ['React', 'TypeScript', 'Next.js', 'AWS']
  },
  {
    avatar: avatar2,
    position: 'バックエンドエンジニア',
    profile: 'Bさん 26歳',
    beforeSalary: '850万円',
    afterSalary: '1,080万円',
    increase: '230万円アップ',
    experience: '実務経験4年 / Go言語のスペシャリスト',
    skills: ['Go', 'Python', 'Docker', 'Kubernetes']
  },
  {
    avatar: avatar3,
    position: '機械学習エンジニア',
    profile: 'Cさん 33歳',
    beforeSalary: '400万円',
    afterSalary: '574万円',
    increase: '174万円アップ',
    experience: '実務経験5年 / 博士号取得',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'AWS']
  },
  {
    avatar: avatar4,
    position: 'iOSエンジニア',
    profile: 'Dさん 31歳',
    beforeSalary: '600万円',
    afterSalary: '700万円',
    increase: '100万円アップ',
    experience: '実務経験6年 / アプリ開発リーダー',
    skills: ['Swift', 'SwiftUI', 'Objective-C', 'Firebase']
  }
];

export const JobExamples: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(styles.visible);
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.jobExamples}>
      <div className={styles.container}>
        <h2 className={styles.title}>転職事例</h2>
        <p className={styles.subtitle}>
          ReAliceを通じて転職された方々の実績をご紹介します。
          <br />
          スキルに応じた適切な年収アップを実現しています。
        </p>
        
        <div className={styles.grid}>
          {jobExamples.map((example, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.profile}>
                <img src={example.avatar} alt="Profile" className={styles.avatar} />
                <div className={styles.info}>
                  <h3>{example.position}</h3>
                  <p>{example.profile}</p>
                  <p className={styles.experience}>{example.experience}</p>
                </div>
              </div>

              <div className={styles.skillTags}>
                {example.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className={styles.salary}>
                <div className={styles.before}>
                  <span>転職前</span>
                  <div className={styles.amount}>年収{example.beforeSalary}</div>
                </div>
                <div className={styles.arrow}>
                  <span className={styles.increase}>{example.increase}</span>
                </div>
                <div className={styles.after}>
                  <span>転職後</span>
                  <div className={styles.amount}>年収{example.afterSalary}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 