import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SnackbarProvider } from 'notistack';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <SnackbarProvider maxSnack={2} anchorOrigin={{vertical:'top', horizontal:'center'}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);

