import React from 'react';
import styles from './Hero.module.css';
import backgroundImage from '../../assets/images/modern-office.avif';

interface HeroProps {
  onCtaClick?: () => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onCtaClick,
  title = "未来を創る\nエンジニアを採用中",
  subtitle = "私たちと一緒に、『価値創出』を生み出しませんか？",
  buttonText = "応募する"
}) => {
  const handleClick = React.useCallback(() => {
    if (onCtaClick) {
      onCtaClick();
    }
  }, [onCtaClick]);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('application-form');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div 
      className={styles.heroSection} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          {title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p className={styles.subtitle}>
          私たちと一緒に、『<span className={styles.highlight}>価値創出</span>』を生み出しませんか？
        </p>
        <div className={styles.buttonWrapper}>
          <a 
            href="#application-form" 
            onClick={scrollToForm} 
            className={styles.ctaButton}
            aria-label={buttonText}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}; 