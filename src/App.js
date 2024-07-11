import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className='background'>
      <div className='container'>
        <div className='logo-container'>
          <h1 className='logo pt-sans-narrow-bold'>PLATO<span className="purple-five">5</span></h1>
          <div className='btn-container'>
            <h2 className='reg-txt2'>Meet Someone New</h2>
            <span className='btn'>
              <a href="mailto:nicholas@plato5.us">Contact PLATO5</a>
            </span><br/>
            <span className='btn'>
              <a href="https://www.instagram.com/goldsteinnick/">Instagram</a>
            </span><br/>
            <span className='btn'>
              <a href="https://twitter.com/GoldsteinNichol">Twitter/X</a>
            </span><br />
          </div>
        </div>
        <div className='glassmorphismBox'>
          <h3 className='reg-txt'>Now Available on iOS and Android</h3>
          <div className='row'>
            <span className='btn'>
              <a href="https://www.google.com/">Android</a>
            </span>
            <pre>   </pre>
            <span className='btn'>
              <a href="https://www.apple.com/">iOS</a>
            </span>
          </div>
          <br/>
          <h3 className='reg-txt'>Web App Coming Soon</h3>
          <br />
        </div>
      </div>
      <div className='article-container'>
        <div className='grid-container'>

          <div className='grid-item'>
            <h2 className='article-title'>The Social Engine: PLATO5</h2>
            <span className='author-panel'>
              <span className='author'>Nicholas Goldstein</span>
            </span>
            <div className='excerpt'>
              <p>TBD...</p>
            </div>
            <div className='image'>
              <img src='image1.jpg' alt='Article 1' />
            </div>
          </div>

          <div className='grid-item'>
            <h2 className='article-title'>PIMS: An In-Depth Look</h2>
            <span className='author-panel'>
              <span className='author'>Nicholas Goldstein</span>
            </span>
            <div className='excerpt'>
              <p>TBD...</p>
            </div>
            <div className='image'>
              <img src='image2.jpg' alt='Article 2' />
            </div>
          </div>

          <div className='grid-item'>
            <h2 className='article-title'>Gamified Conversation & CommIBs</h2>        
            <span className='author-panel'>
              <span className='author'>Nicholas Goldstein</span>
            </span>
            <div className='excerpt'>
              <p>TBD...</p>
            </div>
            <div className='image'>
              <img src='image3.jpg' alt='Article 3' />
            </div>
          </div>

          <div className='grid-item'>
            <h2 className='article-title'>About the Founder & CEO</h2>
            <span className='author-panel'>
              <span className='author'>Nicholas Goldstein</span>
            </span>
            <div className='excerpt'>
              <p>TBD...</p>
            </div>
            <div className='image'>
              <img src='image4.jpg' alt='Article 4' />
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;