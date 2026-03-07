import { useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import IntroduceStore from './components/IntroduceStore';
import LookBook from './components/LookBook';
import InstagramFollow from './components/InstagramFollow';
import Services from './components/Services';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const introduceStoreRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <Navbar 
        setCurrentView={setCurrentView} 
        introduceStoreRef={introduceStoreRef}  
        footerRef={footerRef}  
      />
      {currentView === 'home' ? (
        <>
          <Home setCurrentView={setCurrentView} />
          <IntroduceStore ref={introduceStoreRef} /> 
          <LookBook />
          <InstagramFollow />
        </>
      ) : (
        <Services setCurrentView={setCurrentView} />
      )}
      <Footer ref={footerRef} /> 
    </>
  );
}

export default App;