import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';
import { store } from './redux/sttore.js'


createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <App />
    </Provider>
  ,
)
