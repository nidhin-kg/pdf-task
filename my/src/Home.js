// Home.js
import React, { useRef } from 'react';
import './components/nid.css'

function Home({ VieMode }) {
  const cardStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const iframeStyle = {
    width: '100%',
    height: '500px',
    border: 'none',
  };

  const downloadBtnRef = useRef();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://ati.dae.gov.in/ati12052021_8.pdf';
    link.download = 'ati12052021_8.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="homepage">
      <div style={cardStyle} className="card mt-5">
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <iframe
                src="https://i.ytimg.com/vi/t5b20oLaIaw/maxresdefault.jpg"
                style={iframeStyle}
                title="PDF Viewer"
                sandbox="allow-same-origin allow-scripts allow-popups"
              />
              <h3>Book Description</h3>
              <p>
                Every common man who by his sheer grit and hard work achieves
                success should share his story with the rest for they may find
                inspiration and strength to go on, in his story. The 'Wings of
                Fire' is one such autobiography by visionary scientist Dr. APJ
                Abdul Kalam, who from very humble beginnings rose to be the
                President of India. The book is full of insights, personal
                moments and life experiences of Dr. Kalam. It gives us an
                understanding of his journey of success. Dr. Kalam by narrating
                Wings of Fire covers the life of one of the most influential
                individuals in India’s history. Abdul Kalam had a huge political
                influence on his home country, but he also influenced the
                scientific world. The message you can take from this book is to
                use desire, belief, and expectations to achieve your goals.
              </p>
              <p>To read more enter the details above and download it......</p>
              {VieMode && (
                <button ref={downloadBtnRef} onClick={handleDownload} className="btn btn-primary">
                  Download PDF
                </button>
              )}
              <button onClick={handleScrollToTop} className="btn btn-secondary mt-3 srr " >
                click here to download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
