import React from 'react';
import './styles/main.scss'
import Layout from './components/layout/index';
import Content from './components/content';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ContentMock from './components/contentMock';
import Navbouton from './components/navlink';
import Erreur from './components/erreur';



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
      root.render(
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Navbouton /></Layout>} />
          <Route path='/user/:id' element={<Layout><Content /></ Layout>} />
          <Route path='/user/mock/:id' element={<Layout><ContentMock /></ Layout>} />
          <Route path='/*' element={<Layout><Erreur /></ Layout>} />

        </Routes>
    </BrowserRouter>
      );