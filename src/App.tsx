import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Hero } from './components/Hero/Hero';
import { Benefits } from './components/Benefits/Benefits';
import { Steps } from './components/Steps/Steps';
import { Companies } from './components/Companies/Companies';

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
      <Link to="/" style={{ 
        textDecoration: 'none', 
        color: '#333',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        Findy
      </Link>
      <div>
        <Link to="/" style={{ 
          marginRight: '20px',
          textDecoration: 'none',
          color: '#666'
        }}>求人・企業検索</Link>
        <Link to="/positions" style={{
          textDecoration: 'none',
          color: '#666'
        }}>募集職種</Link>
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
  </div>
);

const Positions = () => (
  <div style={{ 
    marginTop: '80px',
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '80px auto 0'
  }}>
    <h1 style={{
      fontSize: '32px',
      marginBottom: '40px',
      textAlign: 'center'
    }}>募集職種一覧</h1>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px'
    }}>
      {['フロントエンドエンジニア', 'バックエンドエンジニア', 'インフラエンジニア'].map((position) => (
        <div key={position} style={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '10px' }}>{position}</h2>
          <p style={{ color: '#666' }}>最新のWeb技術を活用した開発をお任せします</p>
        </div>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/positions" element={<Positions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App; 