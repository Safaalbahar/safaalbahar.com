import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';

// Suppress specific unwanted console warnings to ensure clean output
const originalWarn = console.warn;
console.warn = (...args) => {
  if (typeof args[0] === 'string' && (
    args[0].includes("Unrecognized origin: 'self'") ||
    args[0].includes("deploy-started") ||
    args[0].includes("React Router Future Flag Warning") ||
    args[0].includes("Relative route resolution")
  )) {
    return;
  }
  originalWarn(...args);
};

const originalError = console.error;
console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes("Unrecognized origin: 'self'")) return;
  originalError(...args);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </>
);