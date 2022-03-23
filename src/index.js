import React, {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.scss';

import reportWebVitals from './reportWebVitals';

const Home = lazy(() => import('./pages/home'));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Suspense fallback="loading...">
    <Routes>
        <Route path="/" element={<Home></Home>} />

    </Routes>
       </Suspense>
  </BrowserRouter>,
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
