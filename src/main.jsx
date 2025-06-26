// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux'
// import store from './Redux/store.js'
// import { FilterContextProvider } from './Context/filter_context';


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store.js';// ✅ Add this lin



 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(

<React.StrictMode>
<BrowserRouter>
<Provider store={store}>
    <App />
</Provider>
 </BrowserRouter>
 </React.StrictMode> 
)
