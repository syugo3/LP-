import React from 'react';
import styles from './Overview.module.css';

export const Overview: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // ヘッダーの高さ分を調整
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.overviewSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>概要</h2>
        
        <div className={styles.content}>
          <div className={styles.sections}>
            <h3>項目</h3>
            <ul className={styles.sectionList}>
              <li onClick={() => scrollToSection('heroTitle')}>トップページ</li>
              <li onClick={() => scrollToSection('troublesTitle')}>こんなことに悩んでいませんか？</li>
              <li onClick={() => scrollToSection('benefitsTitle')}>ご利用の流れ</li>
              <li onClick={() => scrollToSection('stepsTitle')}>各ステップの詳細</li>
              <li onClick={() => scrollToSection('jobExamplesTitle')}>応募事例</li>
              <li onClick={() => scrollToSection('interviewsTitle')}>社内インタビュー</li>
              <li onClick={() => scrollToSection('newsBlogTitle')}>News & Blog</li>
              <li onClick={() => scrollToSection('faqTitle')}>よくある質問</li>
              <li onClick={() => scrollToSection('applicationFormTitle')}>応募フォーム</li>
            </ul>
          </div>

          <div className={styles.policies}>
            <h3>ポリシー</h3>
            <ul className={styles.policyList}>
              <li onClick={() => window.location.href = '/terms'}>利用規約</li>
              <li onClick={() => window.location.href = '/privacy-policy'}>個人情報の取り扱いについて</li>
              <li onClick={() => window.location.href = '/privacy'}>個人情報保護方針</li>
              <li onClick={() => window.location.href = '/antisocial'}>反社会的勢力に対する方針</li>
              <li onClick={() => window.location.href = '/sitemap'}>サイトマップ</li>
              <li onClick={() => window.location.href = '/contact'}>お問い合わせ</li>
              <li onClick={() => window.location.href = 'https://realice.jp'}>企業情報</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}; 