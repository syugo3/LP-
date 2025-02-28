import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Benefits } from './components/Benefits/Benefits';
import { Steps } from './components/Steps/Steps';
// import { Companies } from './components/Companies/Companies';  // 削除
import { JobExamples } from './components/JobExamples/JobExamples';
import { ApplicationForm } from './components/ApplicationForm/ApplicationForm';
import Interviews from './components/Interviews/Interviews';
import { FAQ } from './components/FAQ/FAQ';
import Login from './components/Login/Login';
import nfLogo from './assets/images/nf-logo.png';  // imagesフォルダ内にある場合
// または
// import nfLogo from './assets/nf-logo.png';  // assetsフォルダ直下にある場合

const Home = () => (
  <div style={{ paddingTop: '64px' }}>
    <Hero />
    <Benefits />
    <Steps />
    {/* <Companies /> */}  {/* 削除 */}
    <JobExamples />
    <Interviews />
    <FAQ />
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
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App; 