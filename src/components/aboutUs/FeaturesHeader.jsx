import React from 'react';

export function FeaturesHeader() {
  return (
    <header className="position-relative text-center poltawski-nowy">
      <h1 className="fs-1 fw-semibold text-primary-emphasis">
        Our <span style={{ color: 'rgba(255,149,0,1)' }}>Features</span>
      </h1>
      <p className="mt-3 mx-auto text-center text-dark fs-6 lh-lg w-100" style={{ maxWidth: '600px' }}>
        There are many variations of passages. But the majority have suffered
        alteration in some form, by injected humour, or randomised words.
      </p>
    </header>
  );
}
