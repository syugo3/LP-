import React, { useState, useEffect } from 'react';
import styles from './ApplicationForm.module.css';

export const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    const formContainer = document.querySelector(`.${styles.formContainer}`);
    if (formContainer) {
      observer.observe(formContainer);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここにフォーム送信のロジックを追加
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="application-form" className={styles.applicationForm}>
      <div className={styles.container}>
        <h2 id="applicationFormTitle" className={styles.title}>
          応募フォーム
        </h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>名前：</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>メールアドレス：</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>自己PR：</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              rows={5}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}; 