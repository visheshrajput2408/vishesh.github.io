// import React from 'react';
// import './HeroSection.css';

// // Import your images from the assets folder
// import swirlImage from '../assets/user.png';
// import userImage from '../assets/swirl.jpg';

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       {/* Left Side: Headings & Text */}
//       <div className="hero-left">
//       <img
//           src={userImage}
//           alt="User"
//           className="user-image"
//         />
//         <p className="user-name">Vishesh Rajput</p>
//         <h1>Transforming Ideas <br />Into Digital Reality</h1>
//         <p>
//           I am a versatile, high-impact technology professional offering years of
//           experience in gathering and understanding requirements of clients &
//           multiple stakeholders, targeting assignments in frontend development
//           with an organization of high repute preferably in product development.
//         </p>
//         <button>View My Resume</button>
//       </div>

//       {/* Right Side: Background Graphic & User Image */}
//       <div className="hero-right">
//         <img
//           src={swirlImage}
//           alt="Background swirl"
//           className="background-image"
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React, { useState } from 'react';
import './HeroSection.css';

// Example background images (replace with your own)
import swirl1 from '../assets/assets1/3.jpg';
import swirl2 from '../assets/assets1/5.webp';
import swirl3 from '../assets/assets1/16.jpg';
import swirl4 from '../assets/assets1/25.jpg';
import swirl5 from '../assets/assets1/27.jpg';
import swirl6 from '../assets/assets1/23.jpg';

// Import your user image
import userImage from '../assets/swirl.jpg'; 

const HeroSection = () => {
  // Array of background images
  const images = [swirl1, swirl2, swirl3, swirl4, swirl5,swirl6];

  // Track the current index of the background image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers to move to the next/previous image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="hero-section">
      {/* Left Side: Headings & Text */}
      <div className="hero-left">
        <img
          src={userImage}
          alt="User"
          className="user-image"
        />
        <p className='quote'>``कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। <br />
        मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥" </p>
        <p className='meaning'> ``You have a right to perform your prescribed duty, but <br /> you are not entitled to the fruits of your actions." </p>
        <p className="user-name"> ~Vishesh Rajput <br /> Ph.D Scholar, IISER Bhopal</p>
       
        {/* <h1>Transforming Ideas <br />Into Digital Reality</h1> */}
        <h1> About</h1>
        <p>
        I hold a master's degree in mathematics from the Indian Institute of 
        Engineering Science and Technology, Shibpur, India, and a bachelor's degree 
        in B.Sc. from the University of Delhi. Currently, I am a Ph.D. Scholar at IISER, 
        Bhopal, in the Department of Data Science and Engineering, working under Dr. Akshay Agarwal. 
        My strong foundation in mathematical concepts has fueled my desire to pursue a Ph.D. at IISER
        Bhopal, in order to deepen my expertise. In today's rapidly evolving world, technological advancements,
        particularly in AI-driven innovations, play a crucial role in a country's progress. However, 
        there are still areas of society that lag behind in development.....
        </p>
        <button>View My Resume</button>
      </div>

      {/* Right Side: Background Carousel */}
      <div className="hero-right">
        <div className="background-carousel">
          {/* Display the current background image */}
          <img
            src={images[currentIndex]}
            alt="Background swirl"
            className="background-image"
          />

          {/* Left/Right Arrow Controls */}
          <div className="carousel-controls">
            <button className="carousel-arrow left-arrow" onClick={prevSlide}>
              &lt;
            </button>
            <button className="carousel-arrow right-arrow" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

