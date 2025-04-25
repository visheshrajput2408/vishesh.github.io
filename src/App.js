

// import React from 'react';
// import HeroSection from './components/HeroSection';
// import SocialBar from './components/SocialBar';

// function App() {
//   return (
//     <div>
//       {/* Optional Navbar component here if you want */}
//       <HeroSection />
//       <SocialBar />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialBar from './components/SocialBar';
import Publications from './components/Publications';
import News from './components/News';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      {/* Top-left Navbar */}
      <Navbar />

      {/* Social bar on the right (if you want it to overlap, no position changes needed) */}
      <SocialBar />

      {/* Sections */}
      <section id="home">
        <HeroSection />
      </section>

      <section id="publication">
        <Publications />
      </section>

      <section id="news">
        <News />
      </section>

      <section id="contacts">
        <Contacts />
      </section>
    </div>
  );
}

export default App;


