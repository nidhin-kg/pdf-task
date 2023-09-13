import React, { useState } from 'react';
import axios from 'axios';
import Home from './Home';

function ContactForm() {
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    background: '#f5f5f5' /* Light Gray Background */,
  };

  const cardStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
    background: '#e6f5ff' /* Light Blue Background */,
  };

  const labelStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const inputStyle = {
    WebkitAppearance: 'none',
    margin: 0,
    MozAppearance: 'textfield',
    width: '100%',
  };

  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [showDownloadModal, setShowDownloadModal] = useState(false);


  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://ati.dae.gov.in/ati12052021_8.pdf';
    link.download = 'ati12052021_8.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowDownloadModal(true);

    // Show the alert message for 1 minute
    window.alert('Your download has started.');

    // Set timeout for alert to disappear after 1 minute
    setTimeout(() => {
      window.alert(null); // Clear the alert
    }, 60000); // 60,000 milliseconds = 1 minute
  };

  // const handleWheel = (e) => e.preventDefault(); // Prevent scrolling on wheel

  const handleMouseOver = (e) => e.preventDefault(); // Prevent scroll button on hover

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <form>
          <div className="mb-3" style={labelStyle}>
            <label className="form-label">
              Name<span style={{ color: 'red' }}>*</span>:
              <input
                type="text"
                placeholder="enter your name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-3" style={labelStyle}>
            <label className="form-label">
              Contact Number<span style={{ color: 'red' }}>*</span>:
              <input
                type="number"
                placeholder="enter your number"
                className="form-control"
                style={inputStyle}
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
                onWheel={handleWheel} // Prevent scrolling on wheel
                onMouseOver={handleMouseOver} // Prevent scroll button on hover
              />
            </label>
          </div>
          {contactNumber.length === 10 && (
            <button type="button" onClick={handleDownload} className="btn btn-primary">
              Download
            </button>
          )}
        </form>
      </div>
      <Home />
      
      {/* Download Confirmation Modal */}
      {showDownloadModal && (
        <div className="modal fade" id="downloadModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Download Successful
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowDownloadModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                Your file has been downloaded successfully.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowDownloadModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
