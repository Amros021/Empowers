import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const helmetContext = {};

const rootElement = document.getElementById('root');
const app = (
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);

  // Deduplicatie van ld+json schemas.
  // react-helmet-async + React 19 voegt scripts opnieuw toe na hydration,
  // ongeacht data-rh="true". We dedupliceren op @type zodat zelfs bij
  // kleine whitespace-verschillen duplicaten worden verwijderd.
  const deduplicateSchemas = () => {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    const seen = new Map();
    scripts.forEach(script => {
      try {
        const data = JSON.parse(script.textContent);
        let key;
        if (data['@graph']) {
          key = '@graph:' + data['@graph'].map(i => i['@type']).sort().join(',');
        } else {
          key = data['@type'] || script.textContent.trim();
        }
        if (seen.has(key)) {
          script.remove();
        } else {
          seen.set(key, script);
        }
      } catch (e) {
        // Ongeldige JSON — skip
      }
    });
  };

  // Draai meerdere keren: React 19 concurrent rendering + react-helmet-async
  // kan scripts toevoegen na setTimeout(0).
  setTimeout(deduplicateSchemas, 0);
  setTimeout(deduplicateSchemas, 500);
  setTimeout(deduplicateSchemas, 1500);
} else {
  createRoot(rootElement).render(app);
}

// Trigger prerender engine once the app is mounted and helmet tags are injected
window.setTimeout(() => {
  document.dispatchEvent(new Event('custom-render-trigger'));
}, 1000);
