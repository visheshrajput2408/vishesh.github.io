import React from 'react';
import './SocialBar.css';

const SocialBar = () => {
  return (
    <div className="social-bar">
      <a
        href="https://linkedin.com"
        target="www.linkedin.com/in/vishesh-rajput-7a277119b"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        Twitter
      </a>
      {/* Add more icons/links as needed */}
    </div>
  );
};

export default SocialBar;
