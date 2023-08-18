import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateCardForm from './components/form/form';
import MostPopular from './components/mostPopular/mostPopular';
import Auth from './pages/Auth/auth'
import LogedHome from './pages/Home/logedHome';
import Home from './pages/Landing/home';
import PageNotFound from './pages/NotFound/notFound';
// import Pageindex from './pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loged" element={<LogedHome />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/create-card" element={<CreateCardForm />} />
      <Route path="/popular" element={<MostPopular />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
