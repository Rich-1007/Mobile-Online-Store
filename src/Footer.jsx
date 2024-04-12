import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const handleLinkClick = (url) => {
    // Open the URL in a new tab
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-gray-800 text-white mt-2">
      <div className="container mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Help</h3>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Shipping</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Returns & Exchanges</a></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">About</h3>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Social</h3>
            <ul>
              <li>
                <button onClick={() => handleLinkClick('https://www.facebook.com')} className="text-gray-300 hover:text-white flex items-center">
                  <FaFacebook className="mr-2" /> Facebook
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('https://www.instagram.com/ig_rich123/')} className="text-gray-300 hover:text-white flex items-center">
                  <FaInstagram className="mr-2" /> Instagram
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('https://twitter.com/RICH_10_07')} className="text-gray-300 hover:text-white flex items-center">
                  <FaTwitter className="mr-2" /> Twitter
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('https://github.com/Rich-1007')} className="text-gray-300 hover:text-white flex items-center">
                  <FaGithub className="mr-2" /> GitHub
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('https://www.linkedin.com/in/hricheak-ghosh/')} className="text-gray-300 hover:text-white flex items-center">
                  <FaLinkedin className="mr-2" /> LinkedIn
                </button>
              </li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Tech Stack</h3>
            <ul>
              <li><button onClick={() => handleLinkClick('https://developer.mozilla.org/en-US/docs/Web/HTML')} className="text-gray-300 hover:text-white">HTML</button></li>
              <li><button onClick={() => handleLinkClick('https://tailwindcss.com/docs')} className="text-gray-300 hover:text-white">Tailwind CSS</button></li>
              <li><button onClick={() => handleLinkClick('https://developer.mozilla.org/en-US/docs/Web/JavaScript')} className="text-gray-300 hover:text-white">JavaScript</button></li>
              <li><button onClick={() => handleLinkClick('https://reactjs.org/docs/getting-started.html')} className="text-gray-300 hover:text-white">React.js</button></li>
              <li><button onClick={() => handleLinkClick('https://redux.js.org/')} className="text-gray-300 hover:text-white">Redux</button></li>
              <li><button onClick={() => handleLinkClick('https://redux-toolkit.js.org/')} className="text-gray-300 hover:text-white">Redux Toolkit</button></li>
              <li><button onClick={() => handleLinkClick('https://developer.mozilla.org/en-US/docs/Web/API')} className="text-gray-300 hover:text-white">API</button></li>
              <li><button onClick={() => handleLinkClick('https://firebase.google.com/docs')} className="text-gray-300 hover:text-white">Firebase</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">&copy; 2024 . By <button onClick={() => handleLinkClick('https://www.linkedin.com/in/hricheak-ghosh/')} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Hricheak</button></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
