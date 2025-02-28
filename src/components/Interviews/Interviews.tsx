import React, { useEffect } from 'react';
import styles from './Interviews.module.css';
import ryoryotaroImage from '../../assets/images/ryoryotaro.png';
import marieImage from '../../assets/images/marie.png';

const Interviews: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(
      `.${styles.text}, .${styles.staffComment}, .${styles.profile}`
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.interviews}>
      <div className={styles.container}>
        <h2 className={styles.title}>社内インタビュー</h2>
        <p className={styles.subtitle}>
          ReAliceに応募して転職された方の声をご紹介
        </p>

        <div className={styles.interviewGrid}>
          <div className={styles.interviewCard}>
            <h3 className={styles.cardTitle}>
              ReAliceに応募し新天地にて
              Technical Account Manager
              としてご活躍中
            </h3>
            <div className={styles.profile}>
              <img src={ryoryotaroImage} alt="ryoryotaro" className={styles.avatar} />
              <span className={styles.name}>ryoryotaro さん</span>
            </div>
            <p className={styles.text}>
              前職で<span className={styles.highlight}>SREとしてのキャリアパス</span>を歩んでいる中で、今後の自身のキャリアについて迷いを持っていました。このまま技術を極めてゆくのか、それともピープルマネジメントの道に進むのか。収入面でも漠然とした不安があり、そんな時にReAliceのキャリア相談を知り、軽い気持ちで面談に臨みました。
            </p>
            <div className={styles.staffComment}>
              <h4 className={styles.staffTitle}>担当キャリアアドバイザーの一言</h4>
              <p className={styles.staffText}>
                面談時「現場に立つことがやりがい」と仰っていた点が強く印象に残っています。詳しくお話を伺う中で「エンドユーザーの顔が見えること」「人々に良い影響を与えること」がryoryotaroさんにとっての仕事のやりがい、キャリアの軸にあると感じました。「過去」の体験を整理して「未来」のキャリアを前向きに考える、そのサポートができていたら幸いです。
              </p>
            </div>
            <a 
              href="/login" 
              className={styles.applyButton}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/login';
              }}
            >
              新規登録して面談に申し込む
            </a>
          </div>

          <div className={styles.interviewCard}>
            <h3 className={styles.cardTitle}>
              転職の軸が固まっていない状態から
              自身でも気づかなかった
              魅力的な職場に転職
            </h3>
            <div className={styles.profile}>
              <img src={marieImage} alt="marie" className={styles.avatar} />
              <span className={styles.name}>marie さん</span>
            </div>
            <p className={styles.text}>
              次のキャリアを意識し始めた頃、今回転職することになった企業は全く検討すらしていませんでした。ReAliceから紹介されて臨んだ<span className={styles.highlight}>カジュアル面談</span>で「ここなら、自分が活躍する姿がイメージできるな」と直感で感じて以降、段々と志望度が上がり、最終的に転職することを決めました。
            </p>
            <div className={styles.staffComment}>
              <h4 className={styles.staffTitle}>担当キャリアアドバイザーの一言</h4>
              <p className={styles.staffText}>
                初めて面談させていただいた際のmarieさんはやりたい事や希望の条件をたくさんお持ちでした。転職後、後悔せずに働いていただくために、どの価値観を重視して仕事選びをしていただくのがよいか、一緒に考えさせていただきました。選考中「この会社はすごく自分に合いそう」と嬉しそうに語られていたのが印象的で、そうした会社をご紹介できて本当によかったと思っています。
              </p>
            </div>
            <a 
              href="/login" 
              className={styles.applyButton}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/login';
              }}
            >
              新規登録して面談に申し込む
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interviews; 