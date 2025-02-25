import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Hero } from './components/Hero/Hero';
import { Benefits } from './components/Benefits/Benefits';
import { Steps } from './components/Steps/Steps';
import { Companies } from './components/Companies/Companies';
import { JobExamples } from './components/JobExamples/JobExamples';
import { ApplicationForm } from './components/ApplicationForm/ApplicationForm';
import nfLogo from './assets/images/nf-logo.png';  // imagesフォルダ内にある場合
// または
// import nfLogo from './assets/nf-logo.png';  // assetsフォルダ直下にある場合

// 仮のコンポーネント
const Header = () => (
  <header style={{ 
    padding: '20px', 
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000
  }}>
    <nav style={{ 
      maxWidth: '1200px', 
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <img 
          src={nfLogo}
          alt="NF Logo" 
          style={{
            height: '40px',
            width: 'auto',
            marginRight: '10px'
          }}
        />
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: '#333',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          ReAlice
        </Link>
      </div>
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <Link to="/search" style={{ textDecoration: 'none', color: '#666' }}>求人・企業検索</Link>
        <Link to="/media" style={{ textDecoration: 'none', color: '#666' }}>メディア</Link>
        <Link to="/event" style={{ textDecoration: 'none', color: '#666' }}>イベント</Link>
        <Link to="/recruiter" style={{ textDecoration: 'none', color: '#666' }}>採用担当者の方はこちら</Link>
        <Link to="/login" style={{ textDecoration: 'none', color: '#666' }}>ログイン</Link>
        <Link to="/register" style={{
          textDecoration: 'none',
          color: '#fff',
          background: 'linear-gradient(45deg,rgb(247, 9, 9), #ffc107)',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
          transition: 'transform 0.3s, box-shadow 0.3s'
        }}>新規登録</Link>
      </div>
    </nav>
  </header>
);

const Home = () => (
  <div style={{ paddingTop: '64px' }}>
    <Hero />
    <Benefits />
    <Steps />
    <Companies />
    <JobExamples />
    <ApplicationForm />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App; 