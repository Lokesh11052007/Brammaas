import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/footerLogo.jpg'; // Replace with your path

const LogoLoader = () => (
  <AnimatePresence>
    <motion.div
      className="d-flex flex-column justify-content-center align-items-center vh-100 position-fixed top-0 start-0 w-100 z-3"
      style={{
        background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa)', // subtle gradient
        backdropFilter: 'blur(5px)', // optional blur
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Pulsing Logo Animation */}
      <motion.img
        src={logo}
        alt="Loading..."
        style={{ width: '100px', height: '100px' }}
        initial={{ scale: 0.8 }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Optional Loading Text */}
      <motion.p
        className="mt-3 fw-semibold text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ fontSize: '16px' }}
      >
        Please wait...
      </motion.p>
    </motion.div>
  </AnimatePresence>
);

export default LogoLoader;
