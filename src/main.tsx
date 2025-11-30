import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import App from './App.tsx';

import 'antd/dist/reset.css'; // Ant Design
import './index.css';         // Tailwind

// Get base path from Vite's base config or default to '/'
const getBasePath = () => {
  const base = import.meta.env.BASE_URL;
  // Remove trailing slash for BrowserRouter basename
  return base.endsWith('/') && base !== '/' ? base.slice(0, -1) : base;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasePath()}>
      <ConfigProvider
        theme={{
          token: {
            // Primary color
            colorPrimary: '#1677ff',
            borderRadius: 6,
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
