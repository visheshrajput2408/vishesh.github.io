// import React from 'react';
// import './News.css'; // Create if you want custom styles

// function News() {
//   return (
//     <div className="news-section">
//       <h2>News</h2>
//       <p>Recent updates, events, or announcements go here.</p>
//     </div>
//   );
// }

// export default News;

import React from 'react';
import './News.css';
import swirl from '../assets/swirl.jpg';

// Sample images can be stored in public folder or src/assets folder
// If you place them in "public/news-images/" then use src="/news-images/news1.jpg"

function News() {
  const newsItems = [
    {
      title: 'Research Highlight by IISERB',
      text: 'We introduced a new feature that significantly improves user experience.',
      image: swirl
    },
    {
      title: 'Conference Participation',
      text: 'We presented our research at the XYZ Conference 2025.',
      image: '/news-images/news2.jpg'
    },
    {
      title: 'Collaboration with ABC Corp',
      text: 'We have teamed up with ABC Corp to develop cutting-edge solutions.',
      image: '/news-images/news3.jpg'
    },
    {
      title: 'Award Recognition',
      text: 'Our recent paper was recognized as the best in its category.',
      image: '/news-images/news4.jpg'
    },
    {
      title: 'Upcoming Webinar',
      text: 'Join us for a webinar on emerging tech trends in the industry.',
      image: '/news-images/news5.jpg'
    }
  ];

  return (
    <div className="news-section">
      <h2>News</h2>
      <div className="news-items">
        {newsItems.map((item, index) => (
          <div className="news-item" key={index}>
            <img 
              src={item.image} 
              alt={item.title} 
              className="news-image"
            />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;

