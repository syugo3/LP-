import React from 'react';
import styles from './Companies.module.css';

export const Companies: React.FC = () => {
  return (
    <section className={styles.companies}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          あなたの <span className={styles.highlight}>偏差値</span> や <span className={styles.highlight}>発信力</span> に基づいて、厳選企業からオファーが届きます。
        </h2>
        <p className={styles.subtitle}>
          自社サービス開発企業を中心に、大手企業からスタートアップまで幅広く求人を掲載中
        </p>

        <div className={styles.logoGrid}>
          <img src="/company-logos/mercari.png" alt="mercari" />
          <img src="/company-logos/moneyforward.png" alt="Money Forward" />
          <img src="/company-logos/smarthr.png" alt="SmartHR" />
          <img src="/company-logos/base.png" alt="BASE" />
          <img src="/company-logos/cluster.png" alt="cluster" />
          <img src="/company-logos/iox.png" alt="IOX" />
          <img src="/company-logos/kaminashi.png" alt="KAMINASHI" />
          <img src="/company-logos/tver.png" alt="TVer" />
          <img src="/company-logos/mixi.png" alt="MIXI" />
          <img src="/company-logos/luup.png" alt="LUUP" />
          <img src="/company-logos/kinto.png" alt="KINTO" />
          <img src="/company-logos/honda.png" alt="HONDA" />
          <img src="/company-logos/buysell.png" alt="BUYSELL TECHNOLOGIES" />
          <img src="/company-logos/hoshino.png" alt="星野リゾート" />
          <img src="/company-logos/yumemi.png" alt="YUMEMI" />
          <img src="/company-logos/kyujin.png" alt="休日.com" />
          <img src="/company-logos/soda.png" alt="SODA inc." />
          <img src="/company-logos/go.png" alt="GO" />
          <img src="/company-logos/sansan.png" alt="Sansan" />
          <img src="/company-logos/timee.png" alt="Timee" />
          <img src="/company-logos/hacobu.png" alt="HACOBU" />
        </div>

        <div className={styles.cta}>
          <button className={styles.button}>新規登録して求人一覧を見る</button>
          <p className={styles.terms}>
            利用規約、プライバシーポリシーに同意の上<br />
            サービスをご利用ください。
          </p>
        </div>
      </div>
    </section>
  );
}; 