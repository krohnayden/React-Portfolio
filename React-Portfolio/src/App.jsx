import React from 'react';
import {useState} from 'react';
import Header from './components/header';
import About from './components/body/aboutMe';
import Portfolio from './components/body/portfolioWorks';
import Contact from './components/body/contactMe';
import Resume from './components/body/resume';
import Footer from './components/footer';
import './App.css'

export default function App() {
  const [currentTab, handleTabChange] = useState('About');

  const renderTab = () => {
    if (currentTab === 'About') {
      return <About />;
    }
    if (currentTab === 'Contact') {
      return <Contact />;
    }
    if (currentTab === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentTab === 'Resume') {
      return <Resume />;
    }
    return <About/>
  }
  return (
    <>
      <div>
        <title>Ayden Krohn's Portfolio | {currentTab}</title>
      </div>
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
      <main>{renderTab()}</main>
      <Footer />
    </>
  )
}

