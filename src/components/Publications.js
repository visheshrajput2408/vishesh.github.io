// import React from 'react';
// import './Publications.css'; // Create if you want custom styles

// function Publications() {
//   return (
//     <div className="publications-section">
//       <h2>Publication</h2>
//       <p>Here is where you can showcase your publications or articles.</p>
//     </div>
//   );
// }

// export default Publications;


import React from 'react';
import './Publications.css';
import swirl from '../assets/swirl.jpg';

function Publications() {
  // Array of publication objects
  const publications = [
    {
      title: '1. V. Kumar, A. Agarwal, A Unified, Resilient, and Explainable Adversarial Patch Detector, IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2025 (h5-index: 440)',
      pdfLink: 'https://example.com/paper1.pdf',
      codeLink: 'https://github.com/example/paper1',
      image: swirl
    },
    {
      title: '2. V. Kumar, A. Agarwal, Are Object Recognition Models Effective and Unbiased for Biometric Recognition?, IEEE International Joint Conference on Biometrics (IJCB), 2024, pp. 1-10',
      pdfLink: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10744463',
      codeLink: 'https://github.com/example/paper2'
    },
    {
      title: '3.     V. Kumar, A. Agarwal, The Unseen Adversaries: Robust and Generalized Defense Against Adversarial Patches, SSRN, 2024',
      pdfLink: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4772716',
      codeLink: 'https://github.com/example/paper3'
    },
    {
      title: '4. V. Kumar and A. Agarwal, On Unconstrained Ear Recognition For Privacy-Preserving Authentication, Workshop on Advances of Mobile and Wearable Biometrics (WAMWB), in conjunction with ACM International Conference on Mobile Human-Computer Interaction (MobileHCI), 2023, vol. 3517, pp. 21-36',
      pdfLink: 'https://www.researchgate.net/profile/Vishesh-Rajput/publication/380324573_On_Unconstrained_Ear_Recognition_For_Privacy-Preserving_Authentication/links/6636059e06ea3d0b74258a80/On-Unconstrained-Ear-Recognition-For-Privacy-Preserving-Authentication.pdf',
      codeLink: 'https://github.com/example/paper4'
    },
    {
      title: '5. NK. Sahu, V. Kumar, Dynamical Representation of Frames in Tensor Product of Hardy Spaces,arXiv preprint arXiv:2308.11330 ',
      pdfLink: 'https://arxiv.org/pdf/2308.11330',
      codeLink: 'https://github.com/example/paper5'
    },
  ];

  return (
    <div className="publications-section">
      <h2>Publications</h2>
      <div className="publication-list">
        {publications.map((paper, index) => (
          <div className="publication-item" key={index}>
            <h3>{paper.title}</h3>
            <div className="links">
              <a 
                href={paper.pdfLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View PDF
              </a>
              <a 
                href={paper.codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;

