import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  BrowserRouter, 
  Routes, 
  Route,
  createRoutesFromElements
} from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);