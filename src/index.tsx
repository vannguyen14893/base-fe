import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/reset.css';
import './i18n/AppI18n';
import {ThemeProvider} from "./context/theme/ThemeContext";
import {ConfigProvider} from "antd";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider>
          <ConfigProvider
              // Initial theme will be set by ThemeProvider
              theme={{
                  token: {
                      colorPrimary: '#1890ff',
                  },
              }}
          >
              <App />
          </ConfigProvider>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
