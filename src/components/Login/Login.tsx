import React, { useState } from 'react';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ログイン処理を実装
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>おかえりなさい！</h1>
        
        <button className={styles.socialButton}>
          <img src="/github-icon.png" alt="GitHub" />
          GitHubでログイン
        </button>
        
        <button className={styles.socialButton}>
          <img src="/facebook-icon.png" alt="Facebook" />
          Facebookでログイン
        </button>
        
        <button className={styles.socialButton}>
          <img src="/google-icon.png" alt="Google" />
          Googleでログイン
        </button>

        <div className={styles.divider}>または</div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>メールアドレス*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>パスワード*</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <a href="/forgot-password" className={styles.forgotPassword}>
            パスワードをお忘れですか？
          </a>

          <button type="submit" className={styles.loginButton}>
            ログイン
          </button>
        </form>

        <div className={styles.register}>
          登録がまだの方はこちら→
          <a href="/register" className={styles.registerLink}>
            アカウント登録
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login; 