import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  onCtaClick?: () => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onCtaClick,
  title = "未来を創る\nエンジニアを募集中",
  subtitle = "私たちと一緒に、『価値創出』を生み出しませんか？",
  buttonText = "募集職種を見る"
}) => {
  const handleClick = React.useCallback(() => {
    if (onCtaClick) {
      onCtaClick();
    }
  }, [onCtaClick]);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p className={styles.subtitle}>
          {subtitle}
        </p>
        <button 
          className={styles.ctaButton}
          onClick={handleClick}
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}; 