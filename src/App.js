
import React, { Fragment, useEffect } from 'react';
import Repositories from './Pages/Repositories';
import { Routes, Route } from 'react-router-dom';
import Topcontributors from './Pages/TopContributors';
import "@picocss/pico/css/pico.css";

function App() {

  useEffect(() => {
    const $html = document.querySelector('html')
    if (!localStorage.theme) localStorage.theme = 'light'
    $html.setAttribute('data-theme', localStorage.theme)
  }, [])

  return (

    <Fragment>
        <Routes>
          <Route path="/" element={<Repositories />} />
          <Route path="/contributors/:fullname" element={< Topcontributors />} />
        </Routes>
    </Fragment>
  );
}

export default App;
