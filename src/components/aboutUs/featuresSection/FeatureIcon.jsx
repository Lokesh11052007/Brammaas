import React from 'react';

export function FeatureIcon({ src, bgColor, className = '' }) {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center mx-auto rounded-circle shadow-sm ${className}`}
      style={{
        backgroundColor: bgColor,
        height: '100px',
        width: '100px',
        padding: '0.5rem'
      }}
    >
      {src && (
        <img
          src={src}
          alt=""
          className="img-fluid"
          style={{ width: '53px', objectFit: 'contain', aspectRatio: '0.84' }}
        />
      )}
    </div>
  );
}
