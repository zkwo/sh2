import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import WorkSection from './components/WorkSection/WorkSection'; 
import ContactSection from './components/ContactSection/ContactSection'; 

// Import gambar latar belakang
import backgroundImage from './assets/background-image.jpg'; 

function App() {
  // Style untuk background blur
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    filter: 'blur(10px)', // Efek blur pada gambar
    WebkitFilter: 'blur(10px)', // Dukungan browser lama
    opacity: 0.2, // Menggelapkan gambar agar teks kontras
  };

  return (
    <div className="app-container">
      {/* Background Blur */}
      <div style={backgroundStyle}></div>

      {/* Konten Utama (zIndex 2 agar di atas background) */}
      <main style={{ position: 'relative', zIndex: 2, backgroundColor: 'rgba(18, 18, 18, 0.7)' }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <WorkSection /> 
        <ContactSection />
      </main>
    </div>
  );
}

export default App;

