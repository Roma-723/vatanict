import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './Redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';

import './i18n';
import Loading from './components/loading/Loading';

// Импорти ThemeProvider
import { ThemeProvider } from './context/ThemeContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <ThemeProvider>
            <BrowserRouter>
              <Suspense fallback={<Loading />}>
                <App />
              </Suspense>
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);