import React, { useState } from 'react';
import { Upload, FileText, AlertCircle, CheckCircle, X } from 'lucide-react';
import axios from 'axios';
import './UploadResume.css';

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Please select a valid PDF file.');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      setError('');
    } else {
      setError('Please select a valid PDF file.');
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleKeywordsChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    if (!file) {
      setError('Please select a resume file.');
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('resume', file);
      formData.append('keywords', keywords);

      const response = await axios.post('http://localhost:5000/analyze-resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResult(response.data);
    } catch (err) {
      console.error('Network or server error:', err);
      if (err.response && err.response.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('Network Error: Backend not reachable.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <div className="upload-header">
          <div className="header-icon">
            <FileText size={32} />
          </div>
          <h1 className="upload-title">AI Resume Analysis</h1>
          <p className="upload-subtitle">
            Upload your resume in PDF format for intelligent analysis and personalized feedback
          </p>
        </div>

        <form onSubmit={handleSubmit} className="upload-form">
          <div className="form-section">
            <label className="section-label">Resume Upload</label>
            <div 
              className={`upload-zone ${isDragOver ? 'drag-over' : ''} ${file ? 'has-file' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {file ? (
                <div className="file-preview">
                  <div className="file-info">
                    <FileText className="file-icon" size={24} />
                    <div className="file-details">
                      <span className="file-name">{file.name}</span>
                      <span className="file-size">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    className="remove-file"
                    onClick={handleRemoveFile}
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="upload-prompt">
                  <Upload className="upload-icon" size={48} />
                  <h3>Drag and drop your resume here</h3>
                  <p>or click to browse files</p>
                  <input 
                    type="file" 
                    accept=".pdf" 
                    onChange={handleFileChange}
                    className="file-input"
                  />
                  <span className="file-format">Supported format: PDF</span>
                </div>
              )}
            </div>
          </div>

          <div className="form-section">
            <label htmlFor="keywords" className="section-label">
              Target Keywords <span className="optional">(Optional)</span>
            </label>
            <div className="input-wrapper">
              <textarea
                id="keywords"
                value={keywords}
                onChange={handleKeywordsChange}
                placeholder="Enter relevant keywords like JavaScript, Project Management, Marketing..."
                className="keywords-input"
                rows="3"
              />
              <p className="input-help">
                Add keywords to get more targeted analysis based on specific roles or skills
              </p>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading || !file}
            className={`submit-button ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Analyzing Resume...
              </>
            ) : (
              <>
                <CheckCircle size={20} />
                Analyze Resume
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="alert alert-error">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        {result && (
          <div className="results-section">
            <div className="results-header">
              <CheckCircle className="success-icon" size={24} />
              <h3>Analysis Complete!</h3>
            </div>
            <div className="results-content">
              <pre className="results-data">{JSON.stringify(result, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadResume;