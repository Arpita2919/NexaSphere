import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalErrorBoundary from './components/GlobalErrorBoundary.jsx';
import { registerSW } from 'virtual:pwa-register';
import { HelmetProvider } from 'react-helmet-async';


// Apply saved theme before React renders — prevents flash of wrong theme
const savedTheme = localStorage.getItem('ns-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Register service worker
registerSW({ immediate: true });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <GlobalErrorBoundary>
        <App />
      </GlobalErrorBoundary>
    </HelmetProvider>
  </StrictMode>
);

